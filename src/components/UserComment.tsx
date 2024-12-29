import Image from "next/image";
import Counter from "./Counter";
import { ScopeProvider } from "jotai-scope";
import { count, dataAtom } from "@/atoms/atom";
import Buttons from "./Buttons";
import { UserCommentProps } from "@/types/types";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-hot-toast";

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
    setNewComment(content);
  };

  const updated = () => {
    if (newComment === "") {
      toast.error("Please enter a comment");
    } else {
      const updatedComments = commentsData.comments.map((items) =>
        items.id === id ? { ...items, content: newComment } : items,
      );
      setCommentsData({
        ...commentsData,
        comments: updatedComments,
      });
      setEdit(false);
    }
  };
  return (
    <div className="mx-auto mb-4 flex max-w-md rounded-md bg-Neutral-White px-5 py-7 font-rubik sm:ml-auto sm:max-w-xl md:max-w-2xl">
      <ScopeProvider atoms={[count]}>
        <Counter />
      </ScopeProvider>

      <div className="w-full pl-5">
        <div className="flex items-center gap-x-2 sm:gap-x-3">
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
          <div className="rounded-md bg-Primary-Moderateblue px-2 text-Neutral-VeryLightGray">
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
              className="mt-2 w-full rounded-md border border-Neutral-GrayishBlue p-2"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="ml-auto flex rounded-lg bg-Primary-Moderateblue px-4 py-2 font-rubik text-Neutral-VeryLightGray hover:bg-Primary-LightGrayishBlue"
              onClick={updated}
            >
              UPDATE
            </button>
          </>
        ) : (
          <p className="mt-1 font-rubik font-normal text-Neutral-GrayishBlue">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserComment;
