const CommentPage = async ({params} : {params: Promise<{postId: string; commentId: string}>}) => {

  const { postId, commentId } = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
  const comment = await response.json();

  return (
    <div>
      <h1>Комментарий номер {commentId - 5 * (Number(postId) - 1)} для поста {postId}</h1>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default CommentPage;