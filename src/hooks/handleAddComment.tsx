import { CommentsData } from "@/types/addCommentTypes";

const useAddComment = (
  commentsData: CommentsData,
  setCommentsData: React.Dispatch<React.SetStateAction<CommentsData>>
) => {
  const addComment = (newCommentContent: string) => {
    const allIds = commentsData.comments.flatMap((comment) => [
      comment.id,
      ...comment.replies.map((reply) => reply.id),
    ]);
    const newId = Math.max(...allIds) + 1;

    const date: string = new Date().toISOString();

    const newComment = {
      id: newId,
      content: newCommentContent,
      createdAt: date,
      score: 0,
      user: {
        image: commentsData.currentUser.image,
        username: commentsData.currentUser.username,
      },
      replies: [],
    };

    const updatedComments = {
      ...commentsData,
      comments: [...commentsData.comments, newComment],
    };

    setCommentsData(updatedComments);
  };
  return addComment;
};

export default useAddComment;
