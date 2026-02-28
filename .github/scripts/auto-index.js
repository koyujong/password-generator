/**
 * GitHub Actions에서 실행되는 자동 URL 색인 요청 스크립트
 * 
 * 동작 방식:
 * 1. 변경된 post 파일 목록을 인자로 받음 (예: src/lib/posts/post11.ts)
 * 2. 각 파일을 읽어 slug 값 추출
 * 3. 구글 Indexing API + 네이버 IndexNow API에 색인 요청
 * 
 * 필요한 환경 변수 (GitHub Secrets):
 * - GOOGLE_CREDENTIALS_JSON : GCP 서비스 계정 키 JSON 문자열 전체
 * - NAVER_INDEXNOW_KEY : 네이버 IndexNow 키 (e01d38b582e3ca9e2698eff4972a6542)
 * - BASE_URL : 블로그 기본 주소 (https://pw.4kdrivewalk.com)
 */

const { google } = require('googleapis');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'https://pw.4kdrivewalk.com';
const NAVER_KEY = process.env.NAVER_INDEXNOW_KEY || 'e01d38b582e3ca9e2698eff4972a6542';
const REPO_ROOT = path.resolve(__dirname, '../../');

// ---------- 헬퍼 함수 ----------

/**
 * TypeScript 소스 파일에서 slug 값을 정규식으로 추출합니다.
 */
function extractSlugFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/slug:\s*["'`]([^"'`]+)["'`]/);
  return match ? match[1] : null;
}

/**
 * TypeScript 소스 파일에서 language 값을 추출합니다.
 */
function extractLanguageFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/language:\s*["'`]([^"'`]+)["'`]/);
  return match ? match[1] : 'en';
}

// ---------- 구글 색인 요청 ----------

async function submitToGoogle(url) {
  try {
    const credJson = process.env.GOOGLE_CREDENTIALS_JSON;
    if (!credJson) throw new Error('GOOGLE_CREDENTIALS_JSON 환경 변수가 없습니다.');
    const keys = JSON.parse(credJson);

    const auth = new google.auth.GoogleAuth({
      credentials: keys,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    await indexing.urlNotifications.publish({
      requestBody: { url, type: 'URL_UPDATED' }
    });
    console.log(`  ✅ [Google] 성공: ${url}`);
  } catch (e) {
    console.error(`  ❌ [Google] 실패: ${url} -`, e.message);
  }
}

// ---------- 네이버 색인 요청 ----------

async function submitToNaver(urls) {
  try {
    const host = new URL(urls[0]).hostname;
    await axios.post('https://searchadvisor.naver.com/indexnow', {
      host,
      key: NAVER_KEY,
      urlList: urls,
    }, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
    console.log(`  ✅ [Naver] 성공: ${urls.length}개 URL`);
  } catch (e) {
    const msg = e.response ? `HTTP ${e.response.status}` : e.message;
    console.error(`  ❌ [Naver] 실패:`, msg);
  }
}

// ---------- 메인 ----------

async function main() {
  // 공백으로 구분된 파일 경로들을 argv에서 받음
  const rawArgs = process.argv.slice(2);
  // 하나의 문자열로 전달될 수도 있으므로 split 처리
  const changedFiles = rawArgs.join(' ').trim().split(/\s+/).filter(Boolean);

  if (changedFiles.length === 0) {
    console.log('변경된 포스트 파일이 없습니다. 스킵합니다.');
    return;
  }

  console.log(`\n총 ${changedFiles.length}개의 새 포스트가 감지되었습니다.`);

  const urls = [];

  for (const relPath of changedFiles) {
    const absPath = path.join(REPO_ROOT, relPath);
    if (!fs.existsSync(absPath)) {
      console.log(`  파일을 찾을 수 없음: ${relPath}`);
      continue;
    }

    const slug = extractSlugFromFile(absPath);
    const lang = extractLanguageFromFile(absPath);

    if (!slug) {
      console.log(`  slug 추출 실패: ${relPath}`);
      continue;
    }

    // language에 따라 URL 경로 결정
    let blogPath;
    if (lang === 'en') {
      blogPath = `/blog/${slug}`;
    } else {
      blogPath = `/${lang}/blog/${slug}`;
    }

    const url = `${BASE_URL}${blogPath}`;
    console.log(`  - 감지된 URL: ${url}`);
    urls.push(url);
  }

  if (urls.length === 0) {
    console.log('색인 요청할 URL이 없습니다.');
    return;
  }

  console.log('\n🔍 구글 색인 요청 시작...');
  for (const url of urls) {
    await submitToGoogle(url);
  }

  console.log('\n🔍 네이버 색인 요청 시작...');
  await submitToNaver(urls);

  console.log('\n✅ 모든 색인 요청이 완료되었습니다!');
}

main().catch(e => {
  console.error('치명적 오류:', e);
  process.exit(1);
});
