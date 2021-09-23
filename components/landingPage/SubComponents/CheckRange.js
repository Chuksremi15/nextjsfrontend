function CheckRange({ caption }) {
  return (
    <div className="flex items-center">
      <img src="/coolicon.svg" alt="" className="mr-2 lg:mr-4 h-4 lg:h-2" />
      <h2
        className="
      font-[DM Sans] font-normal 
      text-[#828282] text-base lg:text-lg 
      "
      >
        {caption}
      </h2>
    </div>
  );
}

export default CheckRange;
