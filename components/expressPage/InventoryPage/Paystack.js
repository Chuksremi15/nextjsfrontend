function Paystack({ handleclose, setModal }) {
  return (
    <div className="h-full flex flex-col">
      <div className="m-auto flex items-center">
        <div className="rounded-lg border border-gray-200 mr-4">
          <img className="h-10 w-10" objectFit="contain" src="/paylogo.png" />
        </div>
        <h1
          className="
            text-2xl text-green-black font-bold
             font-[DM Sans] 
            "
        >
          Paystack
        </h1>
      </div>
      <div
        onClick={() => {
          handleclose();
          setModal(true);
        }}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mt-auto
        cursor-pointer flex justify-center w-full mx-auto
        "
      >
        Cancel
      </div>
    </div>
  );
}

export default Paystack;
