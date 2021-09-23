import Image from "next/image";

function BlogCard({ caption, title, img, genre }) {
  return (
    <div
      className="
    border-2 border-[#E0E0E0] rounded-xl p-4
    max-w-xs w-full flex-shrink-0
    "
    >
      <Image
        height={160}
        width={280}
        src={img}
        alt=""
        className="mb-4 m-auto"
      />
      <h1 className="font-[Poppins] font-bold text-lg text-[#001F1D] mb-2 line-clamp-2">
        {title}
      </h1>
      <h1 className="text-[#828282] font-semibold text-base font-[DM Sans] line-clamp-3 mb-4">
        {caption}
      </h1>

      <h1 className="bg-[#F1EAD1] text-base font-[DM Sans] text-[#A68100] font-semibold px-4 py-2 rounded-md w-28 text-center">
        {genre}
      </h1>
    </div>
  );
}

export default BlogCard;
