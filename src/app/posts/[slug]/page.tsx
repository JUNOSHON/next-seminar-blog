import { getPostData } from "@/app/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  //1. slug 경로의 포스트 데이터를 읽어오기
  //2. 마크다운 뷰어에 렌더링
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
