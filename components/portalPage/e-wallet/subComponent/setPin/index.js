import CreatePin from "./CreatePin";
import ResetPin from "./ResetPin";
import SetHead from "./SetHead";

function SetPin() {
  return (
    <div
      className="
        h-[95vh] lg:w-full p-6 w-[90%]
        bg-gray-50 max-w-md mx-auto
        flex flex-col rounded-lg scrollbar-hide
        mt-[2.5vh] overflow-y-scroll
        "
    >
      <SetHead />
      <ResetPin />
    </div>
  );
}

export default SetPin;
