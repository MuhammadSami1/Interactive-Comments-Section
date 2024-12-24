import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
const Reply = () => {
  const [newComment, setNewComment] = useState("");
  const handleSubmit = () => {
    if (newComment === "") {
      toast.error("Please enter a comment");
    }
  };
  return (
    <div className="flex justify-between px-5 py-6 gap-x-4 mb-4 bg-Neutral-White rounded-md max-w-[600px] ml-auto font-rubik">
      <Image
        src="/images/avatars/image-juliusomo.webp"
        alt="userImage"
        width={35}
        height={35}
        className="object-contain self-start"
      />
      <textarea
        placeholder="Add a comment"
        rows={3}
        className="w-full border border-Neutral-GrayishBlue rounded-md p-2"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button
        type="button"
        className="bg-Primary-Moderateblue hover:bg-Primary-LightGrayishBlue rounded-lg text-Neutral-VeryLightGray px-4 py-2 self-start"
        onClick={handleSubmit}
      >
        SEND
      </button>
    </div>
  );
};

export default Reply;