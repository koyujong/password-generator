---
description: 비밀번호 생성기 블로그에 새로운 영어 글을 작성하는 가이드라인입니다. H태그 구조, CTA 버튼 배치, Related Articles 디자인 등 SEO 최적화된 포맷을 따릅니다.
---

# 📝 블로그 포스트 작성 가이드라인

이 워크플로우는 `src/lib/posts/` 디렉토리에 새로운 영어 블로그 포스트를 작성할 때 반드시 따라야 할 형식과 규칙을 정의합니다.

---

## 1. 파일 구조

### 파일 위치 및 네이밍
- **경로**: `src/lib/posts/postXX.ts` (XX는 번호, 예: `post11.ts`)
- **export**: `export const postXX: BlogPost = { ... }`
- **import**: `import { BlogPost } from "../blogData";`

### BlogPost 인터페이스
```typescript
export interface BlogPost {
  slug: string;           // URL 경로 (kebab-case, 영어)
  title: string;          // 글 제목 (SEO 타겟 키워드 포함, 60자 이내 권장)
  description: string;    // meta description (155자 이내, CTA성 문구 포함)
  date: string;           // 작성일 (YYYY-MM-DD)
  category: string;       // 카테고리 (Security, Tools, Tips, Accessibility, Crypto 중 택1)
  content: string;        // HTML 콘텐츠 (백틱 템플릿 리터럴)
  keywords: string[];     // SEO 키워드 (6~8개, 메인 키워드 + 롱테일 키워드)
  language: string;       // "en" (영어 글)
  translationGroup: string; // "postXX" (다국어 번역 그룹 ID)
}
```

---

## 2. 콘텐츠 HTML 구조 (필수)

모든 블로그 포스트는 **아래 구조를 정확히** 따라야 합니다:

```
H2: 도입부 (문제 제기 / 배경 설명)
  └─ H3: 소제목 1 (세부 설명)
  └─ H3: 소제목 2 (세부 설명)

H2: 핵심 논점 (분석 / 비교 / 이유)
  └─ H3: 소제목 1
  └─ H3: 소제목 2
  └─ H3: 소제목 3

  ★ CTA 인라인 버튼 (2번째 H2 섹션 끝에 삽입)

H2: 실용 가이드 (해결책 / 단계별 안내)
  └─ H3: Step 1 / 소제목
  └─ H3: Step 2 / 소제목
  └─ H3: Step 3 / 소제목

  ★ Related Articles 카드 박스

H2: Conclusion (결론 및 CTA 유도)
  └─ <p> 요약 문단
```

### 필수 규칙
1. **H2는 최소 4개** 사용 (도입, 핵심, 실용, 결론)
2. **각 H2 아래 H3를 2~3개** 배치하여 스캔 가능한 구조 유지
3. **H3 없이 H2만 연속 배치 금지** — 모든 H2 아래 반드시 H3 소제목 존재
4. **단락은 2~4문장** 이내로 짧게 유지 (모바일 가독성)
5. **핵심 키워드는 `<strong>` 태그**로 굵게 표시 (자연스러운 맥락 내 배치)

---

## 3. CTA 인라인 버튼 (필수)

**2번째 H2 섹션이 끝난 직후**, 3번째 H2 시작 전에 아래 HTML을 삽입합니다:

```html
<div class="cta-inline"><a href="/">🔐 Try the Free Password Generator</a></div>
```

### 배치 규칙
- 반드시 **2번째 H2 섹션의 마지막 `<p>` 또는 `</ul>` 바로 뒤**에 배치
- 글 전체에 **1개만** 삽입 (중복 금지)
- 3번째 H2 `<h2>` 태그 바로 위에 위치

---

## 4. Related Articles 카드 박스 (필수)

**Conclusion H2 바로 위**에 아래 HTML 블록을 삽입합니다:

```html
<div class="related-articles">
  <h3>📚 Related Articles</h3>
  <div class="related-articles-grid">
    <a href="/blog/[slug-1]">[글 제목 1]</a>
    <a href="/blog/[slug-2]">[글 제목 2]</a>
    <a href="/blog/[slug-3]">[글 제목 3]</a>
  </div>
</div>
```

### 배치 규칙
- **3개의 관련 글 링크** 포함 (기존 블로그 포스트 중 내용이 연관된 글 선정)
- href는 `/blog/[해당 글의 slug]` 형식
- 링크 텍스트는 해당 글의 title (간결하게 수정 가능)

---

## 5. SEO 키워드 전략

### 키워드 배치 원칙
| 위치 | 키워드 사용 |
|------|-----------|
| `title` | 메인 타겟 키워드 **필수** 포함 |
| `description` | 메인 + 보조 키워드 **자연스럽게** 포함 |
| `keywords[]` | 6~8개: "password generator", "random password generator", "secure password generator" + 주제별 롱테일 |
| 첫 번째 H2 | 메인 키워드 또는 동의어 포함 |
| `<strong>` 태그 | "password generator", "random password generator", "strong password" 등을 본문에서 자연스럽게 볼드 처리 |

### 필수 삽입 키워드 (모든 글에 1회 이상)
- `password generator`
- `random password generator`
- `secure password generator` 또는 `strong password generator`
- `free password generator`

---

## 6. 글쓰기 톤 & 스타일

### 문체
- **권위적이고 전문적** — 정보를 전달하되 독자의 행동 유도
- **2인칭 (You)** 중심 — 독자에게 직접 말하는 방식
- **능동태** 우선 — "A password should be generated" ❌ → "You must generate a password" ✅
- **정량적 데이터** 활용 — 숫자, 수학적 증거, 비교표를 적극 사용

### 금지 사항
- ❌ "In this article, we will discuss..." (메타 서술 금지)
- ❌ 3문장 이상의 연속 단락 (긴 텍스트 벽 금지)
- ❌ H1 태그 사용 (H1은 페이지 타이틀이 자동 생성)
- ❌ `<br>` 태그 남용
- ❌ 인라인 스타일 사용 (CSS 클래스 활용)
- ❌ content 안에 큰 그라데이션 CTA 배너 직접 삽입 (page.tsx가 자동 생성)

---

## 7. 페이지 자동 생성 요소 (content에 넣지 말 것)

아래 요소들은 `page.tsx` 블로그 템플릿이 **자동으로** 삽입합니다. content HTML에 직접 만들면 **중복**됩니다:

| 자동 요소 | 위치 | 설명 |
|----------|------|------|
| 큰 그라데이션 배너 | Conclusion 뒤, Keywords 앞 | "Need a secure password right now?" + "Generate Password" 버튼 |
| Article Keywords | 글 최하단 | `keywords[]` 배열을 자동 렌더링 |
| AdBanner 광고 | 상단 + 하단 | 구글 애드센스 자동 삽입 |
| H1 제목 | 글 최상단 | `title` 필드를 H1으로 자동 렌더링 |
| meta description | `<head>` | `description` 필드를 자동 삽입 |
| hreflang 태그 | `<head>` | `translationGroup`으로 다국어 태그 자동 생성 |

---

## 8. 사용 가능한 CSS 클래스

content HTML 안에서 사용할 수 있는 커스텀 CSS 클래스:

### 인라인 CTA 버튼
```html
<div class="cta-inline"><a href="/">🔐 Try the Free Password Generator</a></div>
```
- 인디고 배경 + 흰색 텍스트 + 라운드 코너
- 중앙 정렬, 호버 시 확대 + 그림자 효과

### Related Articles 카드 박스
```html
<div class="related-articles">
  <h3>📚 Related Articles</h3>
  <div class="related-articles-grid">
    <a href="/blog/slug">제목</a>
  </div>
</div>
```
- 인디고 그라데이션 배경 박스
- 각 링크는 흰색 카드, → 화살표 아이콘, 호버 시 슬라이드 효과

### H태그 자동 스타일 (글로벌 CSS)
| 태그 | 스타일 |
|------|--------|
| `<h2>` | 1.65rem, 800 weight, 하단 연한 파란색 보더 |
| `<h3>` | 1.25rem, 700 weight, **왼쪽 인디고 보더 라인** |

---

## 9. 콘텐츠 서식 패턴

### `<strong>` — SEO 키워드 강조
```html
<p>Use a <strong>random password generator</strong> to create...</p>
```
- 타겟 키워드를 본문에서 **자연스러운 맥락** 안에 볼드 처리
- 한 단락에 1~2개 이하로 제한 (과도한 볼드 금지)

### `<code>` — 비밀번호 예시
```html
<p>A string like <code>k#9Dp*!v2QzLx$8Ym&c</code> cannot be guessed.</p>
```
- 실제 비밀번호 예시, 기술 용어, 파일명 등에 사용

### `<em>` — 인용/강조 발화
```html
<p>You might see: <em>"Error: Only letters and numbers allowed."</em></p>
```
- 에러 메시지, 인용문, 가벼운 강조에 사용

### `<ul>` — 비교 리스트
```html
<ul>
  <li><strong>Scenario A:</strong> Short password → cracked in days.</li>
  <li><strong>Scenario B:</strong> Long password → immune for billions of years.</li>
</ul>
```
- 장단점 비교, 시나리오 비교에 적합

### `<ol>` — 순서형 단계 안내
```html
<ol>
  <li>Open the <strong>password generator</strong>.</li>
  <li>Set length to 20 characters.</li>
  <li>Click Generate.</li>
</ol>
```
- 사용 방법, 설정 절차, 단계별 가이드에 사용

---

## 10. 글 분량 가이드

| 항목 | 기준 |
|------|------|
| 전체 단어 수 | **800~1,200 단어** (영어 기준) |
| H2 섹션 수 | **4개** (도입, 핵심, 실용, 결론) |
| 각 H2 아래 H3 | **2~3개** |
| 단락당 문장 수 | **2~4문장** |
| Related Articles 링크 | **3개** |
| SEO 키워드 | **6~8개** |

---

## 11. blogData.ts 등록 절차

새 포스트 파일 생성 후, 반드시 `src/lib/blogData.ts`에 등록합니다:

```typescript
// 1. import 추가
import { post11 } from "./posts/post11";

// 2. blogPosts 배열에 추가 (English 섹션)
export const blogPosts: BlogPost[] = [
  // English
  post01, post02, ..., post10, post11,  // ← 여기에 추가
  // Korean
  ...
];
```

---

## 12. 기존 카테고리 목록

| 카테고리 | 주제 예시 |
|---------|----------|
| `Security` | 비밀번호 보안 원리, 해킹 방어, 엔트로피 분석 |
| `Tools` | 생성기 사용법, 커스텀 설정, 특수문자 제한 |
| `Tips` | 실용적 비밀번호 팁, 특수 상황 대응 |
| `Accessibility` | 노년층, 접근성, 발음 가능한 패스워드 |
| `Crypto` | 암호화폐 지갑, 콜드월렛, 블록체인 보안 |

---

## 13. 전체 포스트 예시 템플릿

```typescript
import { BlogPost } from "../blogData";

export const post11: BlogPost = {
  slug: "your-seo-friendly-slug-here",
  language: "en",
  translationGroup: "post11",
  title: "Your SEO-Optimized Title with Target Keyword",
  description: "Compelling 155-char meta description with keywords and CTA.",
  date: "2026-MM-DD",
  category: "Security",
  keywords: ["password generator", "random password generator", "secure password generator", "your-topic-keyword-1", "your-topic-keyword-2", "your-topic-keyword-3"],
  content: `
    <h2>Introduction: Set the Scene (Problem Statement)</h2>
    <p>Opening paragraph addressing the reader's pain point...</p>

    <h3>Sub-topic Expanding the Problem</h3>
    <p>Detailed explanation with data and examples...</p>

    <h3>Why This Matters Now</h3>
    <p>Urgency and relevance in 2026...</p>

    <h2>Core Analysis: Deep Dive into the Topic</h2>
    <p>Main analytical section with data, comparisons, math...</p>

    <h3>Supporting Point 1</h3>
    <p>Evidence and reasoning...</p>

    <h3>Supporting Point 2</h3>
    <p>More evidence with <code>code examples</code> if relevant...</p>

    <div class="cta-inline"><a href="/">🔐 Try the Free Password Generator</a></div>

    <h2>Practical Guide: How to Solve This</h2>
    <p>Actionable steps the reader can take...</p>

    <h3>Step 1: First Action</h3>
    <p>Detailed instruction referencing the <strong>password generator</strong> tool...</p>

    <h3>Step 2: Second Action</h3>
    <p>Follow-up instruction...</p>

    <h3>Step 3: Third Action</h3>
    <p>Final step with concrete outcome...</p>

    <div class="related-articles">
      <h3>📚 Related Articles</h3>
      <div class="related-articles-grid">
        <a href="/blog/existing-post-slug-1">Related Article Title 1</a>
        <a href="/blog/existing-post-slug-2">Related Article Title 2</a>
        <a href="/blog/existing-post-slug-3">Related Article Title 3</a>
      </div>
    </div>

    <h2>Conclusion: Strong Closing CTA</h2>
    <p>Summary of key points + direct call-to-action using <strong>strong password generator</strong> reference. Encourage the reader to take action NOW.</p>
  `,
};
```

---

## 14. 다국어 번역 참고

영어 글 완성 후, 동일 구조로 3개 언어 번역 파일을 생성합니다:
- `postXX_ko.ts` (한국어, `language: "ko"`)
- `postXX_ja.ts` (일본어, `language: "ja"`)
- `postXX_es.ts` (스페인어, `language: "es"`)

모든 번역 파일은 동일한 `translationGroup`을 공유합니다.
