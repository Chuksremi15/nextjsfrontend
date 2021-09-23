function Tag({ active }) {
  return (
    <h1
      className={`
      px-4 py-1 border-2 ${
        active
          ? "bg-green-main border-green-main text-white"
          : "border-gray-300 bg-[#E0E0E0] text-green-black "
      }
      text-base font-[poppins]  font-semibold rounded-md
      `}
    >
      Tag
    </h1>
  );
}

export default Tag;
