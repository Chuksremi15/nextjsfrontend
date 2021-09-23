import { usePortalPageState } from "../../../store";
import { useCategoriesState } from "../../../store/product.store";
import Link from "next/link";

function MobileCat() {
  const { categories } = useCategoriesState();
  const { onPortal } = usePortalPageState();

  function shuffle(array) {
    const sortedArray = array.sort(() => Math.random() - 0.5);
    return sortedArray;
  }

  const shuffledCategories = shuffle(categories);

  return (
    <div
      className="
    w-full h-40 px-4 overflow-y-scroll scrollbar-hide
    grid grid-cols-2 sm:grid-cols-3 mt-4 gap-2 md:hidden
    "
    >
      {shuffledCategories?.slice(0, 24).map(({ name }, i) => (
        <Link
          key={i}
          href={`/${
            onPortal ? "portal" : "express"
          }/shop/${name.toLowerCase()}`}
        >
          <p
            className="
               text-xs font-normal 
            text-gray-main font-[DM Sans] 
            cursor-pointer 
          "
          >
            {name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default MobileCat;
