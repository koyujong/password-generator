export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
  keywords: string[];
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

export const blogPosts: BlogPost[] = [
  post01,
  post02,
  post03,
  post04,
  post05,
  post06,
  post07,
  post08,
  post09,
  post10
];
