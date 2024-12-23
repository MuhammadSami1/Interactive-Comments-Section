"use client";
import { dataAtom, dialogAtom } from "@/atoms/atom";
import { useAtom } from "jotai";
import DeleteDialog from "./Dialog";
import { useState } from "react";

const Buttons = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useAtom(dialogAtom);
  const [deleteId, setDeleteId] = useState(-1);
  const [commentsData, setCommentsData] = useAtom(dataAtom);

  const openDialog = (id: number) => {
    setIsOpen(true);
    setDeleteId(id);
  };
  const handleDelete = () => {
    const updataComments = commentsData.comments.filter(
      (items) => items.id !== deleteId
    );
    setCommentsData({ ...commentsData, comments: updataComments });
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex gap-x-3 ml-auto">
        <div className="flex items-center" onClick={() => openDialog(id)}>
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
              fill="#ED6368"
              className="hover:fill-Primary-PaleRed"
            />
          </svg>
          <span className="font-rubik pl-2 font-medium hover:text-Primary-PaleRed text-Primary-SoftRed">
            Delete
          </span>
        </div>
        <div className="flex items-center">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
              fill="#5357B6"
              className="hover:fill-Primary-LightGrayishBlue"
            />
          </svg>
          <span className="font-rubik pl-2 font-medium text-Primary-Moderateblue hover:text-Primary-LightGrayishBlue ">
            Edit
          </span>
        </div>
      </div>
      {isOpen && (
        <DeleteDialog
          open={isOpen}
          setOpen={() => setIsOpen(false)}
          idDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Buttons;
