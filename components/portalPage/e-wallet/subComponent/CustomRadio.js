function CustomRadio({ selected }) {
  return (
    <div
      className={`
    h-5 w-5 border-2 border-gray-200 rounded-full 
    relative cursor-pointer ${selected && "bg-green-main"}
    flex items-center justify-center
    `}
    >
      <div className="bg-white h-1/2 rounded-full w-1/2 absolute"></div>
    </div>
  );
}

export default CustomRadio;
