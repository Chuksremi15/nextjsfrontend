import Image from "next/image";

function BlogGridCard({ caption, title, img, genre }) {
  return (
    <div
      className="
    border-2 border-[#E0E0E0] rounded-xl p-2
    max-w-xs w-full
    "
    >
      <Image
        height={160}
        width={280}
        src={img}
        alt=""
        className="mb-4 m-auto"
      />
      <h1 className="font-[Poppins] font-bold text-base text-[#001F1D] mb-2 line-clamp-2">
        {title}
      </h1>
      <h1 className="text-[#828282] font-semibold text-xs font-[DM Sans] line-clamp-3 mb-4">
        {caption}
      </h1>

      <h1 className="bg-[#F1EAD1] text-xs font-[DM Sans] text-[#A68100] font-semibold px-2 py-1 rounded-md w-28 text-center">
        {genre}
      </h1>
    </div>
  );
}

export default BlogGridCard;
