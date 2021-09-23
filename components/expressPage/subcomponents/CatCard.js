import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { usePortalPageState } from "../../../store";
import Link from "next/link";

function CatCard({ data }) {
  const { onPortal } = usePortalPageState();
  return (
    <div
      className="
        relative h-24 rounded-xl w-72 flex-shrink-0
        flex justify-center items-center overflow-hidden
        "
    >
      <img
        src={data?.coverImage ? data.coverImage : "/baby.png"}
        alt=""
        className="h-full w-full"
      />
      <div
        className="
      absolute h-full w-full
      flex justify-center items-center
      bg-gray-900 bg-opacity-30 
      "
      >
        <div className="flex justify-center">
          <img
            src={data?.icon ? data.icon : "BabyFace.png"}
            alt=""
            className="
            h-14 w-12 bg-[#ffffff]  bg-opacity-40  
            p-4 rounded-full mr-4
            "
          />
          <h1 className="text-white font-bold text-lg">{data?.name}</h1>
        </div>
      </div>
      <Link
        href={`/${
          onPortal ? "portal" : "express"
        }/shop/${data.name.toLowerCase()}`}
      >
        <ArrowNarrowRightIcon className="h-8 text-white absolute bottom-2 right-2 cursor-pointer z-10" />
      </Link>
    </div>
  );
}

export default CatCard;
