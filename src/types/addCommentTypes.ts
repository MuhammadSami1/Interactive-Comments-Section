type User = {
  username: string;
  image: {
    png: string;
    webp: string;
  };
};

type Reply = {
  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  user: User;
};

type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
};

export type CommentsData = {
  currentUser: User;
  comments: Comment[];
};
