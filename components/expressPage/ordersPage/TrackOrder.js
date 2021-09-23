import { XIcon } from "@heroicons/react/outline";

const FormInput = ({ name }) => (
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
      type="text"
      className="
    w-full flex-grow focus:outline-none bg-white
    border border-gray-200 rounded-lg p-2
    "
    />
  </div>
);

function TrackOrder({ handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="
               h-[70%] w-[90%] p-6 
                bg-gray-50 max-w-md mx-auto
                flex flex-col rounded-lg
                mt-[25%] lg:mt-[15%] xl:mt-[10%]
        "
    >
      <XIcon
        onClick={() => handleClose()}
        className="
        h-6 text-gray-main mb-4 
        cursor-pointer mr-auto
        "
      />
      <div className="mb-4">
        <h1
          className="
            text-base lg:text-lg font-[Poppins] mb-2
                font-bold text-green-black
            "
        >
          Track an Order
        </h1>
        <p
          className="
           text-xs lg:text-sm font-[Poppins] 
           font-normal text-gray-main
           "
        >
          To track your order please enter your Order ID in the box below and
          press ‘Track’ button. This was given to you on your receipt and in the
          confirmation email you should have received.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <FormInput name="ORDER ID" />
        <FormInput name="BILLING EMAIL" />
        <button
          className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
        >
          track
        </button>
      </form>
    </div>
  );
}

export default TrackOrder;
