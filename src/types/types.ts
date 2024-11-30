export type CommentProps = {
  content?: string;
  createdAt?: string;
  username?: string;
  image: string;
};

export type ReplyCommentProps = {
  content?: string;
  createdAt?: string;
  replyingTo?: string;
  username?: string;
  image: string;
};

export type DeleteDialogProps = {
  open: boolean;
  setOpen: () => void;
};
