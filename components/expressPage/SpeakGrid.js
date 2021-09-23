import SpeakCard from "./subcomponents/SpeakCard";

function SpeakGrid() {
  return (
    <div
      className="
       container grid gap-2 grid-cols-2 lg:grid-cols-4
       md:gap-6 lg:gap-4 
      "
    >
      <SpeakCard
        bgClass="bg-[#F0FAF9] ring-offset-green-800 "
        colorClass="bg-green-main"
        textColor="text-green-main"
      />
      <SpeakCard
        bgClass="bg-[#bc6bd948] ring-offset-green-800 "
        colorClass="bg-[#BB6BD9]"
        textColor="text-[#BB6BD9]"
      />
      <SpeakCard
        bgClass="bg-[#E5EDF3] ring-offset-green-800 "
        colorClass="bg-[#1B75BB]"
        textColor="text-[#1B75BB]"
      />
      <SpeakCard
        bgClass="bg-[#F0FAF9] ring-offset-green-800 "
        colorClass="bg-green-main"
        textColor="text-green-main"
      />
    </div>
  );
}

export default SpeakGrid;
