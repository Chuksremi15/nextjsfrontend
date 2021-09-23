function Welcome({ name, desc, img }) {
  return (
    <div className="flex flex-col max-w-md w-full mb-6">
      <h1
        className="font-[Poppins] text-2xl 
          font-bold text-[#001F1D] mb-2"
      >
        Welcome to
      </h1>
      <h1 className="font-[Poppins] text-4xl font-bold text-[#001F1D] mb-2">
        Midlman {name}
      </h1>
      <h1 className="font-[DM Sans] text-base font-semibold text-[#828282]">
        {desc}
      </h1>
      <img src={img} alt="" className="mt-10 hidden lg:inline-block" />
    </div>
  );
}

export default Welcome;
