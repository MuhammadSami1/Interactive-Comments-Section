import { CommentsData } from "@/types/addCommentTypes";

const useAddComment = (
  commentsData: CommentsData,
  setCommentsData: React.Dispatch<React.SetStateAction<CommentsData>>,
) => {
  const addComment = (newCommentContent: string) => {
    const allIds = commentsData.comments.flatMap((comment) => [
      comment.id,
      ...comment.replies.map((reply) => reply.id),
    ]);
    const newId = Math.max(...allIds) + 1;

    // const date: string = new Date().getTime.toString();
    function timeNow(date = new Date()) {
      return (
        (date.getHours() < 10 ? "0" : "") +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" : "") +
        date.getMinutes()
      );
    }
    const time = timeNow();

    const newComment = {
      id: newId,
      content: newCommentContent,
      createdAt: time,
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
