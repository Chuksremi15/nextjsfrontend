import BigCard from "./subComponents/BigCard";

function BlogSlides() {
  return (
    <div
      className="flex overflow-x-scroll w-full scrollbar-hide space-x-4 px-6
      max-w-screen-xl py-6 m-auto items-center flex-grow overscroll-x-auto
      "
    >
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
    </div>
  );
}

export default BlogSlides;
