import { Post } from "../service/posts";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, category, date, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
}
