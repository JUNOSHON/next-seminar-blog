import { FaRegCalendarAlt } from "react-icons/fa";
import MarkdownViewer from "./MarkdownViewer";
import { PostData } from "../service/posts";

export default async function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
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
  );
}
