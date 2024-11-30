"use client";
import Image from "next/image";
import Counter from "./Counter";
import { ReplyCommentProps } from "@/types/types";
import { ScopeProvider } from "jotai-scope";
import { count } from "@/atoms/atom";

const ReplyComment = ({
  content,
  createdAt,
  replyingTo,
  username,
  image,
}: ReplyCommentProps) => {
  return (
    <div className="flex  justify-between px-5 py-7 mb-4 bg-Neutral-White rounded-md max-w-[600px] ml-auto font-rubik">
      <ScopeProvider atoms={[count]}>
        <Counter />
      </ScopeProvider>

      <div className="pl-5">
        <div className="flex gap-x-4 items-center">
          <Image
            src={image}
            alt="image1"
            className="object-contain"
            width={35}
            height={35}
          />

          <div className="text-Neutral-DarkBlue font-semibold text-fontSize-base">
            {username}
          </div>
          <span className="text-Neutral-GrayishBlue">{createdAt}</span>

          <div className="ml-auto flex items-center">
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
                className="hover:fill-Primary-LightGrayishBlue p-1"
              />
            </svg>
            <span className="font-rubik p-1 font-medium text-Primary-Moderateblue hover:text-Primary-LightGrayishBlue ">
              Reply
            </span>
          </div>
        </div>

        <p className="text-Neutral-GrayishBlue font-normal font-rubik mt-4">
          {`@${replyingTo} ${content}`}
        </p>
      </div>
    </div>
  );
};

export default ReplyComment;
