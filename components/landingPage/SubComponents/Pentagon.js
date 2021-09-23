function Pentagon({ score, caption, className }) {
  return (
    <div
      className={`
    relative  flex items-center justify-center
    ${className}
    `}
    >
      <img src="/polygon.svg" alt="" className="lg:h-48 hidden lg:inline" />
      <img src="/Polygon1.png" alt="" className="lg:hidden h-32" />
      <div
        className="
      text-[#001F1D] rounded-full absolute px-8
      -mt-4
      "
      >
        <h1
          className="
        font-[Poppins]  text-xl lg:text-4xl 
        font-bold  text-center w-full mb-2
        "
        >
          {score}
        </h1>
        <h1
          className="
        font-[Manrope] text-xs lg:text-base 
        lg:font-normal font-medium text-center 
        "
        >
          {caption}
        </h1>
      </div>
    </div>
  );
}

export default Pentagon;
