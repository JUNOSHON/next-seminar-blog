import MarkdownViewer from "@/app/components/MarkdownViewer";
import { getPostData } from "@/app/service/posts";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  //1. slug 경로의 포스트 데이터를 읽어오기
  //2. 마크다운 뷰어에 렌더링
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 ">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <FaRegCalendarAlt />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className="text-xl font-bold">{description}</p>

        <div className="w-500 border-2 border-sky-600 mt-4 mb-8"></div>
        <MarkdownViewer content={content}></MarkdownViewer>
      </section>
    </article>
  );
}
