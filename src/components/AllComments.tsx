import AddComment from "@/components/AddComment";
import Comment from "@/components/Comment";
import data from "@/app/data/data.json";
import ReplyComment from "./ReplyComment";
import UserComment from "./UserComment";

const AllComments = () => {
  return (
    <div className="flex flex-col mt-4 max-w-2xl mx-auto pb-32">
      {data?.comments.map((items) => (
        <>
          <Comment
            key={items.id}
            content={items.content}
            createdAt={items.createdAt}
            username={items.user.username}
            image={items.user.image.webp}
          />
          {items.replies.map((value) => (
            <ReplyComment
              key={value.id}
              content={value.content}
              createdAt={value.createdAt}
              replyingTo={value.replyingTo}
              username={value.user.username}
              image={value.user.image.webp}
            />
          ))}
        </>
      ))}
      <div className="mb-3">
        <UserComment />
        <UserComment />
        <UserComment />
        <UserComment />
      </div>

      <div className="fixed bottom-0 w-full z-10 mb-4 overflow-y-auto">
        <AddComment />
      </div>
    </div>
  );
};

export default AllComments;
