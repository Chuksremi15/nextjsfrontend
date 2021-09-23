import ErrorMessage from "./ErrorMessage";

function LocationInput({ name, location, state, country, error }) {
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
        <div
          className="
      grid grid-cols-3 gap-2 divide-x-2
      divide-gray-200 border border-gray-200 rounded-lg
      "
        >
          <input
            type="text"
            placeholder="Address"
            {...location}
            className="
    w-full flex-grow focus:outline-none
    bg-white p-2
    "
          />

          <input
            placeholder="City"
            type="text"
            {...state}
            className="
    w-full flex-grow focus:outline-none
    bg-white p-2
    "
          />

          <input
            placeholder="Country"
            type="text"
            {...country}
            className="
    w-full flex-grow focus:outline-none
    bg-white p-2
    "
          />
        </div>
      </div>
      {error && <ErrorMessage message="Complete address is required" />}
    </div>
  );
}

export default LocationInput;
