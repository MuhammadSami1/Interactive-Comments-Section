import { AddCommentProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const AddComment = ({ addComment }: AddCommentProps) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment("");
    }
    if (newComment === "") {
      toast.error("Please enter a comment");
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mx-auto flex max-w-md justify-between gap-x-4 rounded-md bg-Neutral-White px-5 py-6 sm:max-w-xl md:ml-auto md:max-w-2xl">
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
          className="w-full resize-none overflow-y-auto break-words rounded-md border border-Neutral-GrayishBlue p-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>

        <button
          type="button"
          className="self-start rounded-lg bg-Primary-Moderateblue px-4 py-2 font-rubik text-Neutral-VeryLightGray hover:bg-Primary-LightGrayishBlue"
          onClick={handleSubmit}
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default AddComment;
