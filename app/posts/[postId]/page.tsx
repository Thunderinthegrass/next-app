const Post = async ({params} : {params: Promise<{postId: string}>}) => {

  const { postId } = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();

  return (
    <div>
      <h1>{post.title} second</h1>
      <p>{post.body}</p>
      <p>{post.body}</p>
      <span>подсократил посты</span>
      <p>Грунты - горные породы различных свойств, состава и происхождения, слагающие верхние слои земной коры, подверженные процессам выветривания</p>
    </div>
  );
};

export default Post;