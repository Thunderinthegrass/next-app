import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

const Page = async () => {
  const posts = await getPosts()

  return (
    <div>
      <h2>Посты</h2>
      {posts.map((post: Post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>{post.id}</Link>
      ))}
    </div>
  );
};

export default Page;