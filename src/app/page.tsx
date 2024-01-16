import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import CarouselPosts from "./components/CarouselPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </>
  );
}
