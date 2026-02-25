export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
  keywords: string[];
  language: string;
  translationGroup: string;
}

import { post01 } from "./posts/post01";
import { post02 } from "./posts/post02";
import { post03 } from "./posts/post03";
import { post04 } from "./posts/post04";
import { post05 } from "./posts/post05";
import { post06 } from "./posts/post06";
import { post07 } from "./posts/post07";
import { post08 } from "./posts/post08";
import { post09 } from "./posts/post09";
import { post10 } from "./posts/post10";
// Korean
import { post01_ko } from "./posts/post01_ko";
import { post02_ko } from "./posts/post02_ko";
import { post03_ko } from "./posts/post03_ko";
import { post04_ko } from "./posts/post04_ko";
import { post05_ko } from "./posts/post05_ko";
import { post06_ko } from "./posts/post06_ko";
import { post07_ko } from "./posts/post07_ko";
import { post08_ko } from "./posts/post08_ko";
import { post09_ko } from "./posts/post09_ko";
import { post10_ko } from "./posts/post10_ko";
// Japanese
import { post01_ja } from "./posts/post01_ja";
import { post02_ja } from "./posts/post02_ja";
import { post03_ja } from "./posts/post03_ja";
import { post04_ja } from "./posts/post04_ja";
import { post05_ja } from "./posts/post05_ja";
import { post06_ja } from "./posts/post06_ja";
import { post07_ja } from "./posts/post07_ja";
import { post08_ja } from "./posts/post08_ja";
import { post09_ja } from "./posts/post09_ja";
import { post10_ja } from "./posts/post10_ja";
// Spanish
import { post01_es } from "./posts/post01_es";
import { post02_es } from "./posts/post02_es";
import { post03_es } from "./posts/post03_es";
import { post04_es } from "./posts/post04_es";
import { post05_es } from "./posts/post05_es";
import { post06_es } from "./posts/post06_es";
import { post07_es } from "./posts/post07_es";
import { post08_es } from "./posts/post08_es";
import { post09_es } from "./posts/post09_es";
import { post10_es } from "./posts/post10_es";

export const blogPosts: BlogPost[] = [
  // English
  post01, post02, post03, post04, post05, post06, post07, post08, post09, post10,
  // Korean
  post01_ko, post02_ko, post03_ko, post04_ko, post05_ko, post06_ko, post07_ko, post08_ko, post09_ko, post10_ko,
  // Japanese
  post01_ja, post02_ja, post03_ja, post04_ja, post05_ja, post06_ja, post07_ja, post08_ja, post09_ja, post10_ja,
  // Spanish
  post01_es, post02_es, post03_es, post04_es, post05_es, post06_es, post07_es, post08_es, post09_es, post10_es,
];
