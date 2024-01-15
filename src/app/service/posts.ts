import path from "path";
import { readFile } from "fs/promises";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string; //이미지의 경로
  featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "public", "data", "posts.json");

  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse) //받아온 데이터를 JSON 으로 파싱
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1))); //날짜순으로 정렬
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}
