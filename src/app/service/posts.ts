import path from "path";
import {readFile} from "fs/promises";
import {cache} from "react";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string; //이미지의 경로
    featured: boolean;
};

export type PostData = Post & { content: string; next: Post | null; prev: Post | null };

export const getAllPosts = cache(async () => {
    const filePath = path.join(process.cwd(), "public", "data", "posts.json");

    return readFile(filePath, "utf-8")
        .then<Post[]>(JSON.parse) //받아온 데이터를 JSON 으로 파싱
        .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1))); //날짜순으로 정렬
})

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

//피쳐되지 않은 포스트
export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(
        process.cwd(),
        "public",
        "data",
        "posts",
        `${fileName}.md`
    );
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === fileName);

    if (!post)
        throw new Error(`${fileName} 에 해당하는 포스트를 찾을 수 없음`);

    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length ? posts[index + 1] : null;
    const content = await readFile(filePath, "utf-8");

    return {...post, content, next, prev};
}
