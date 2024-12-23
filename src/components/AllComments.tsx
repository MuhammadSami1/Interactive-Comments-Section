"use client";
import AddComment from "@/components/AddComment";
import Comment from "@/components/Comment";
import data from "@/app/data/data.json";
import ReplyComment from "./ReplyComment";
import UserComment from "./UserComment";
import { useAtom } from "jotai";
import { dataAtom } from "@/atoms/atom";
// import DeleteDialog from "./Dialog";
import useAddComment from "@/hooks/handleAddComment";
import { useEffect } from "react";

const AllComments = () => {
  // const [isOpen, setIsOpen] = useAtom(dialogAtom);
  const [commentsData, setCommentsData] = useAtom(dataAtom);
  const addComment = useAddComment(commentsData, setCommentsData);

  useEffect(() => {
    const storedData = localStorage.getItem("commentsData");
    if (storedData) {
      setCommentsData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("commentsData", JSON.stringify(commentsData));
  }, [commentsData]);

  return (
    <div className="flex flex-col mt-4 max-w-2xl mx-auto pb-32">
      {data?.comments.map((items) => (
        <div key={items.id}>
          <Comment
            content={items.content}
            createdAt={items.createdAt}
            username={items.user.username}
            image={items.user.image.webp}
          />
          {items.replies?.map((value) => (
            <ReplyComment
              key={value.id}
              content={value.content}
              createdAt={value.createdAt}
              replyingTo={value.replyingTo}
              username={value.user.username}
              image={value.user.image.webp}
            />
          ))}
        </div>
      ))}
      <div className="mb-2">
        {commentsData.comments
          .filter((filterIds) => filterIds.id > 2)
          .map((userComment) => (
            <>
              <UserComment
                key={userComment.id}
                content={userComment.content}
                createdAt={userComment.createdAt}
                username={userComment.user.username}
                image={userComment.user.image.webp}
                id={userComment.id}
              />
            </>
          ))}
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <AddComment addComment={addComment} />
      </div>
    </div>
  );
};

export default AllComments;
