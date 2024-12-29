import { dataAtom } from "@/atoms/atom";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReplyComments from "./ReplyComments";

type User = {
  image: {
    webp: string;
    png: string;
  };
  username: string;
};

type Reply = {
  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  user: User;
};

const Reply = ({ replyingTo }: { replyingTo?: string | undefined }) => {
  const [newComment, setNewComment] = useState("");
  const [commentData, setCommentsData] = useAtom(dataAtom);
  const [send, setSend] = useState(false);
  const [newReplyData, setNewReplyData] = useState<Reply | null>(null);

  const handleSubmit = () => {
    if (newComment === "") {
      toast.error("Please enter a comment");
      return;
    }

    const largestId = commentData.comments.flatMap((comment) => [
      comment.id,
      ...comment.replies.map((reply) => reply.id),
    ]);

    const newId = Math.max(...largestId) + 1;

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

    const newReply: Reply = {
      id: newId,
      content: newComment,
      createdAt: time,
      replyingTo: replyingTo || "",
      user: {
        image: commentData.currentUser.image,
        username: commentData.currentUser.username,
      },
    };

    const updatedComments = commentData.comments.map((comment) => {
      if (comment.id === Number(replyingTo)) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }

      return comment;
    });

    setCommentsData({ ...commentData, comments: updatedComments });
    setNewReplyData(newReply);
    setSend(true);
    console.log(commentData);
  };

  useEffect(() => {
    if (replyingTo !== undefined) {
      setNewComment(replyingTo);
    }
  }, [replyingTo]);

  return (
    <>
      {send && newReplyData ? (
        <ReplyComments
          image={newReplyData.user.image.webp}
          username={newReplyData.user.username}
          createdAt={newReplyData.createdAt}
          content={newReplyData.content}
          id={newReplyData.id}
        />
      ) : (
        <div className="mb-4 ml-auto flex max-w-xl justify-between gap-x-4 rounded-md bg-Neutral-White px-5 py-6 font-rubik md:max-w-[600px]">
          <Image
            src="/images/avatars/image-juliusomo.webp"
            alt="userImage"
            width={35}
            height={35}
            className="self-start object-contain"
          />
          <textarea
            placeholder="Add a comment"
            rows={3}
            className="w-full rounded-md border border-Neutral-GrayishBlue p-2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="self-start rounded-lg bg-Primary-Moderateblue px-4 py-2 text-Neutral-VeryLightGray hover:bg-Primary-LightGrayishBlue"
            onClick={handleSubmit}
          >
            Reply
          </button>
        </div>
      )}
    </>
  );
};

export default Reply;
