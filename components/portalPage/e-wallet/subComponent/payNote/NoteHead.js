import { ChevronLeftIcon } from "@heroicons/react/outline";
import { usePayNoteState } from "../../../../../store";

function NoteHead() {
  const { togglePayNoteNav } = usePayNoteState();
  return (
    <div
      onClick={() => togglePayNoteNav(false)}
      className="
        flex items-center
        text-gray-main
        "
    >
      <ChevronLeftIcon
        className="
          h-6 cursor-pointer
          mr-1
          "
      />
      <p
        className="
           text-sm lg:text-base font-[Poppins] 
           font-normal cursor-pointer
          "
      >
        Back
      </p>
    </div>
  );
}

export default NoteHead;
