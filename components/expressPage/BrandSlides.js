import BrandCard from "./subcomponents/BrandCard";

function BrandSlides() {
  return (
    <div
      className="
        flex flex-col max-w-screen-xl w-full
        mx-auto px-4 py-4
        "
    >
      <h1
        className="
            text-lg text-green-black font-bold
            mb-6  font-[Poppins]
            "
      >
        Featured Brands
      </h1>

      <div
        className="
        flex items-center justify-between
        overflow-x-scroll scrollbar-hide
        space-x-6
        "
      >
        {Array(8)
          .fill()
          .map((_, i) => (
            <BrandCard key={i} />
          ))}
      </div>
    </div>
  );
}

export default BrandSlides;
