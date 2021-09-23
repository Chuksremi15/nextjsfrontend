function Info({ title, desc }) {
  return (
    <div className="font-[DM Sans]">
      <h1
        className="
         text-base 
            font-medium text-green-black
        "
      >
        {title}
      </h1>
      <p
        className="
       text-sm 
           font-normal text-gray-main
    "
      >
        {desc}
      </p>
    </div>
  );
}

export default Info;
