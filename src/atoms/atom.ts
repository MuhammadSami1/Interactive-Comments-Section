import { atom } from "jotai";
import data from "@/app/data/data.json";
import { CommentsData } from "@/types/addCommentTypes";

export const count = atom(0);

export const dialogAtom = atom(false);

export const dataAtom = atom<CommentsData>(data);
