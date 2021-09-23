import ErrorMessage from "./ErrorMessage";

function FormInput({ name, type, register, error }) {
  return (
    <div>
      <div className="space-y-2">
        <h1
          className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
        >
          {name}
        </h1>
        <input
          type={type}
          {...register}
          className="
        w-full flex-grow focus:outline-none bg-white
         border border-gray-200 rounded-lg py-2 px-4
    "
        />
      </div>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}

export default FormInput;
