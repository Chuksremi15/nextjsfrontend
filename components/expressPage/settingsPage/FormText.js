function FormText({ name }) {
  return (
    <div className="space-y-2">
      <h1
        className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
      >
        {name}
      </h1>
      <textarea
        type="text"
        className="
              border border-gray-200 rounded-lg p-2 bg-white 
              focus:outline-none h-32 w-full flex-grow resize-none
              placeholder-gray-200::placeholder placeholder-opacity-75 
              "
      />
    </div>
  );
}

export default FormText;
