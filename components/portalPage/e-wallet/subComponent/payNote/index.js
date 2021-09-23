import NoteHead from "./NoteHead";
import PayNoteForm from "./PayNoteForm";

function PayNote() {
  return (
    <div
      className="
        h-[95vh] w-[90%] lg:w-full p-6 
        bg-gray-50 max-w-md mx-auto
        flex flex-col rounded-lg scrollbar-hide
        mt-[2.5vh] overflow-y-scroll
        "
    >
      <NoteHead />
      <h1
        className="
      text-lg mx-auto my-6 text-green-black font-bold 
      text-[Poppins]"
      >
        Bank Payment Notification
      </h1>
      <PayNoteForm />
    </div>
  );
}

export default PayNote;
