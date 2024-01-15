import { getAllPosts } from "../service/posts";
import PostsGrid from "./PostsGrid";
import { Post } from "../service/posts";
import { getFeaturedPosts } from "../service/posts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold">FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
