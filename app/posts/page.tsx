import Link from "next/link";

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
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>{post.id}</Link>
      ))}
    </div>
  );
};

export default Page;