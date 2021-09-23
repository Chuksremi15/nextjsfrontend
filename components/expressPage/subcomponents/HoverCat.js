import { usePortalPageState } from "../../../store";
import { useCategoriesState } from "../../../store/product.store";
import Link from "next/link";

function HoverCat({ categories }) {
  const { onPortal } = usePortalPageState();

  function shuffle(array) {
    const sortedArray = array.sort(() => Math.random() - 0.5);
    return sortedArray;
  }
  const shuffledCategories = shuffle(categories);

  //function that splits array into four equal parts
  function chunk(arr, chunkSize) {
    let i,
      j,
      chunked = [];
    for (i = 0, j = arr.length; i < j; i += chunkSize) {
      chunked.push(arr.slice(i, i + chunkSize));
    }
    return chunked;
  }

  //divide shuffled categories into four equal sub arrays
  const chunkedCategories = chunk(
    shuffledCategories,
    Math.ceil(shuffledCategories.length / 4)
  );

  return (
    <div
      className="
   w-max rounded-2xl
    py-8 bg-white
    px-8
    "
    >
      <h1
        className="
            text-lg lg:text-xl text-green-black font-bold
             font-[Poppins] mb-8 pl-8
            "
      >
        All Categories
      </h1>
      <div
        className="
       gap-6 grid grid-cols-2 
       md:grid-cols-4 divide-x
       divide-gray-200
       "
      >
        {chunkedCategories?.map((data, i) => (
          <div key={i} className="grid gap-6 pr-20 pl-8 ">
            {data.slice(0, 8).map(({ name }, i) => (
              <Link
                href={`/${
                  onPortal ? "portal" : "express"
                }/shop/${name.toLowerCase()}`}
              >
                <p
                  key={i}
                  className="
               text-sm font-normal 
            text-gray-main font-[DM Sans] 
            cursor-pointer
          "
                >
                  {name}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverCat;
