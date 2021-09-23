function SetTab({ name, id, currentId, setCurrentId, express }) {
  return (
    <h1
      onClick={() => setCurrentId(id)}
      className={`
         lg:text-base text-xs cursor-pointer text-center
         font-[Poppins] font-semibold rounded-md
         flex items-center justify-center py-2
         ${id === currentId ? "bg-white text-green-black" : "text-gray-main"}
         ${express ? "w-1/2" : "w-1/4 "}
         `}
    >
      {name}
    </h1>
  );
}

export default SetTab;
