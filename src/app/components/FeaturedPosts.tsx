import { getAllPosts } from "../service/posts";
import PostsGrid from "./PostsGrid";
import { Post } from "../service/posts";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  return (
    <section>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
