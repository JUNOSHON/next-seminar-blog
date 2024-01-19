import AdjacentPostCard from "@/app/components/AdjacentPostCard";
import MarkdownViewer from "@/app/components/MarkdownViewer";
import PostContent from "@/app/components/PostContent";
import { getPostData } from "@/app/service/posts";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import {Metadata} from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props):Promise<Metadata>{
    const {title,description} = await getPostData(slug);
    return{
        title,
        description
    }
}

export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 ">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />

      <PostContent post={post} />
      <section className="flex shadow-md ">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
