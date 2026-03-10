import Link from "next/link";

async function  getComments(postId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }

  return response.json();
}

async function getPost(postId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

const CommentsPage = async ({params}: { params: Promise<{ postId: string }> }) => {
  const  {postId} = await params;

  const [post, comments] = await Promise.all([
    getPost(postId),
    getComments(postId),
  ])

  return(
    <div>
      <h2>Комментарии к посту {post.id}</h2>

      {comments.map(comment => (
        <Link key={comment.id} href={`/posts/${postId}/comments/${comment.id}`}>
          <p>comment name: {comment.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default CommentsPage