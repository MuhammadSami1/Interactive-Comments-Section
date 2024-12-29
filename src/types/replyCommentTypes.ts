type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

type ReplyTypes = {
  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  user: User;
  replies: ReplyTypes[];
};

type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: ReplyTypes[];
};

export type ReplyCommentsTypes = {
  currentUser: User;
  comments: Comment[];
};
