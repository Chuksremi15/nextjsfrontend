function DepositHead() {
  return (
    <div
      className="
      flex items-center justify-between text-sm flex-nowrap 
      lg:text-base py-2 font-[DM Sans] font-semibold 
      text-green-main bg-white rounded-md
      "
    >
      <h1 className="lg:w-[20%] w-[35%] items-center flex justify-center">
        Transaction ID
      </h1>

      <h1 className="lg:w-[10%] w-[20%] items-center flex justify-center">
        Amount
      </h1>
      <h1 className="lg:w-[20%] w-[25%] items-center flex justify-center">
        Date & time
      </h1>
      <h1
        className="    
          lg:w-[20%] w-[20%]
        flex justify-center"
      >
        Status
      </h1>
    </div>
  );
}

export default DepositHead;
