function AdvertCard({ className }) {
  return (
    <div
      className={`
         flex w-full max-w-screen-sm relative h-52 
         rounded-2xl items-center overflow-hidden
         ${className}
        `}
    >
      <img src="/addimg.png" alt="" className="absolute h-full w-full " />
      <h1
        className="
       font-[Poppins] text-xl font-bold text-[#1B75BB]
       z-10 max-w-sm p-6 
      "
      >
        Enjoy all your favourite products with midlman
      </h1>
    </div>
  );
}

export default AdvertCard;
