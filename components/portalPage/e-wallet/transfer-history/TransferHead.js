function TransferHead() {
  return (
    <div
      className="
      flex items-center justify-between text-xs 
    lg:text-base p-2 space-x-2
      font-[DM Sans] font-semibold text-center
      text-green-main bg-white rounded-md
      "
    >
      <h1 className="w-[19%] items-center flex">Payment ID</h1>
      <h1
        className="  w-[19%]
        flex justify-center"
      >
        Bank Name
      </h1>
      <h1 className="w-[15%] items-center flex justify-center">Amount</h1>
      <h1 className="w-[15%] items-center flex justify-center">
        Date and Time
      </h1>
      <h1 className="w-[14%] items-center flex justify-center">
        Depositor Name
      </h1>
      <h1
        className="    
           w-[14%] 
        flex justify-center"
      >
        Status
      </h1>
    </div>
  );
}

export default TransferHead;
