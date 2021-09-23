function BigBtn({ className, onClick, text }) {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg
        cursor-pointer flex justify-center w-full mx-auto ${className}
        `}
    >
      {text}
    </div>
  );
}

export default BigBtn;
