import Image from "next/image";
import Counter from "./Counter";
import { ScopeProvider } from "jotai-scope";
import { count, dataAtom } from "@/atoms/atom";
// import Buttons from "./Buttons";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-hot-toast";
import ReplyDeleteButtons from "./ReplyDeleteButtons";

type ReplyCommentsProps = {
  image: string;
  content: string;
  username: string;
  createdAt: string;
  // replyingTo: string;

  id: number;
};

const ReplyComments = ({
  image,
  content,
  username,
  createdAt,
  id,
}: ReplyCommentsProps) => {
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
      return;
    }
    const updatedComments = commentsData.comments.map((items) => {
      if (items.id) {
        return {
          ...items,
          replies: items.replies.map((reply) =>
            reply.id === id ? { ...reply, content: newComment } : reply,
          ),
        };
      }
      return items;
    });
    setCommentsData({
      ...commentsData,
      comments: updatedComments,
    });
    setEdit(false);
  };
  return (
    <div className="mx-auto max-w-xs sm:ml-auto sm:mr-12 sm:max-w-lg md:mr-0 md:max-w-[600px]">
      <div className="mb-4 flex rounded-md bg-Neutral-White px-2 py-7 font-rubik text-xs sm:px-5 md:text-base">
        <ScopeProvider atoms={[count]}>
          <Counter />
        </ScopeProvider>

        <div className="w-full pl-2 sm:pl-5">
          <div className="flex items-center gap-x-1 sm:gap-x-3">
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
            <div className="rounded-md bg-Primary-Moderateblue px-1 text-Neutral-VeryLightGray sm:px-2">
              You
            </div>
            <span className="text-Neutral-GrayishBlue">{createdAt}</span>

            {/* <Buttons id={id} handleEdit={handleEdit} /> */}
            <ReplyDeleteButtons id={id} handleEdit={handleEdit} />
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
    </div>
  );
};

export default ReplyComments;
