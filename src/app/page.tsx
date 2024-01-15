import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
