import Image from "next/image";
import Counter from "./Counter";
import { ScopeProvider } from "jotai-scope";
import { count, dataAtom } from "@/atoms/atom";
import Buttons from "./Buttons";
import { UserCommentProps } from "@/types/types";
import { useAtom } from "jotai";
import { useState } from "react";

const UserComment = ({
  content,
  createdAt,
  username,
  image,
  id,
}: UserCommentProps) => {
  const [commentsData, setCommentsData] = useAtom(dataAtom);
  const [edit, setEdit] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleEdit = () => {
    setEdit(true);
  };

  const updated = () => {
    const updatedComments = commentsData.comments.map((items) =>
      items.id === id ? { ...items, content: newComment } : items
    );
    setCommentsData({
      ...commentsData,
      comments: updatedComments,
    });
    setEdit(false);
  };
  return (
    <div className="flex px-5 py-7 mb-4 bg-Neutral-White rounded-md font-rubik">
      <ScopeProvider atoms={[count]}>
        <Counter />
      </ScopeProvider>

      <div className="pl-5 w-full">
        <div className="flex items-center gap-x-3">
          <Image
            src={image}
            alt="image1"
            className="object-contain"
            width={35}
            height={35}
          />

          <div className="font-semibold text-Neutral-DarkBlue text-fontSize-base">
            {username}
          </div>
          <div className="bg-Primary-Moderateblue text-Neutral-VeryLightGray px-2  rounded-md">
            You
          </div>
          <span className="text-Neutral-GrayishBlue">{createdAt}</span>

          <Buttons id={id} handleEdit={handleEdit} />
        </div>

        {edit ? (
          <>
            <textarea
              placeholder="Edit comment"
              rows={3}
              className="w-full border border-Neutral-GrayishBlue rounded-md p-2 mt-2"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="bg-Primary-Moderateblue hover:bg-Primary-LightGrayishBlue rounded-lg text-Neutral-VeryLightGray px-4 py-2 font-rubik flex ml-auto"
              onClick={updated}
            >
              UPDATE
            </button>
          </>
        ) : (
          <p className="text-Neutral-GrayishBlue font-normal font-rubik mt-1 ">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserComment;
