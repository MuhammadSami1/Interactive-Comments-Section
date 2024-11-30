"use client";
import Image from "next/image";
import { useState } from "react";

const AddComment = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="flex justify-between px-5 py-6 gap-x-4 bg-Neutral-White rounded-md max-w-2xl">
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
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full border border-Neutral-GrayishBlue rounded-md placeholder:p-2"
      ></textarea>
      <button
        type="button"
        className="bg-Primary-Moderateblue hover:bg-Primary-LightGrayishBlue rounded-lg text-Neutral-VeryLightGray px-4 py-2 self-start font-rubik"
      >
        SEND
      </button>
    </div>
  );
};

export default AddComment;
