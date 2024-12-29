import Image from "next/image";
import Counter from "./Counter";
import { ReplyCommentProps } from "@/types/types";
import { ScopeProvider } from "jotai-scope";
import { count } from "@/atoms/atom";
import Reply from "./Reply";
import { useState } from "react";

const ReplyComment = ({
  content,
  createdAt,
  replyingTo,
  username,
  image,
}: ReplyCommentProps) => {
  const [reply, setReply] = useState(false);
  const handleReply = () => {
    setReply(true);
  };

  return (
    <>
      <div className="mx-auto mb-4 ml-auto flex max-w-md justify-between rounded-md bg-Neutral-White px-5 py-7 font-rubik sm:mr-12 sm:max-w-lg md:mr-0 md:max-w-[600px]">
        <ScopeProvider atoms={[count]}>
          <Counter />
        </ScopeProvider>

        <div className="pl-5">
          <div className="flex items-center gap-x-4">
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
            <span className="text-sm text-Neutral-GrayishBlue sm:text-lg">
              {createdAt}
            </span>

            <div className="ml-auto flex items-center" onClick={handleReply}>
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  fill="#5357B6"
                  className="p-1 hover:fill-Primary-LightGrayishBlue"
                />
              </svg>
              <span className="p-1 font-rubik font-medium text-Primary-Moderateblue hover:text-Primary-LightGrayishBlue">
                Reply
              </span>
            </div>
          </div>
          <p className="mt-1 font-rubik font-normal text-Neutral-GrayishBlue">
            <span className="font-rubik font-semibold text-Primary-Moderateblue">
              {replyingTo}
            </span>{" "}
            {content}
          </p>
        </div>
      </div>
      {reply && <Reply replyingTo={replyingTo} />}
    </>
  );
};

export default ReplyComment;
