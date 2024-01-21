import FilterablePosts from "../components/FilterablePosts";
import { getAllPosts } from "../service/posts";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Show Wisoft',
  description: 'Show Wisoft blog'
}


export default async function page() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
