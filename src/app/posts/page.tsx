import FilterablePosts from "../components/FilterablePosts";
import { getAllPosts } from "../service/posts";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Psts",
  description: "한밭대학교 무선통신 소프트웨어 연구실 기술 블로그",
};


export default async function page() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
