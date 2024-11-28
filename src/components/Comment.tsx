import Image from "next/image";
import Counter from "./Counter";

const Comment = () => {
  return (
    <div className="flex justify-evenly px-5 py-3 bg-Neutral-White rounded-md">
      <Counter />
      <div className="pl-7">
        <div className="flex">
          <Image
            src="/images/avatars/image-amyrobson.png"
            alt="image1"
            className="object-contain"
            width={30}
            height={30}
          />
          <div>
            amyrobson <span>1 month ago</span>
          </div>
        </div>
        <p className="">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You&apos;ve nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
      <div className="ml-auto">reply</div>
    </div>
  );
};

export default Comment;
