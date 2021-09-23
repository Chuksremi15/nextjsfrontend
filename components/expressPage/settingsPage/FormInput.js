import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";

function FormInput({ name, type, register, error, errorTouched }) {
  return (
    <div>
      <div className="space-y-2">
        <p
          className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
        >
          {name}
        </p>
        <input
          type={type}
          {...register}
          className="
    w-full flex-grow focus:outline-none bg-white
    border border-gray-200 rounded-lg p-2
    "
        />
      </div>
      {error && errorTouched && <ErrorMessage message={error} />}
    </div>
  );
}

export default FormInput;
