"use client";
import Image from "next/image";
import Counter from "./Counter";
import { ScopeProvider } from "jotai-scope";
import { count } from "@/atoms/atom";
import Buttons from "./Buttons";

const UserComment = () => {
  return (
    <div className="flex px-5 py-7 mb-4 bg-Neutral-White rounded-md font-rubik">
      <ScopeProvider atoms={[count]}>
        <Counter />
      </ScopeProvider>

      <div className="pl-5 w-full">
        <div className="flex items-center gap-x-3">
          <Image
            src="/images/avatars/image-juliusomo.webp"
            alt="image1"
            className="object-contain"
            width={35}
            height={35}
          />

          <div className="font-semibold text-Neutral-DarkBlue text-fontSize-base">
            juliusomo
          </div>
          <div className="bg-Primary-Moderateblue text-Neutral-VeryLightGray px-2  rounded-md">
            You
          </div>
          <span className="text-Neutral-GrayishBlue">2 days ago</span>

          <Buttons />
        </div>

        <p className="text-Neutral-GrayishBlue font-normal font-rubik mt-4">
          Hello
        </p>
      </div>
    </div>
  );
};

export default UserComment;
