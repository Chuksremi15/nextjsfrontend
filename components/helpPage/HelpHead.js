import onHelpPageData from "../../contents/onHelpPage";
import SearchField from "../blogPage/subComponents/SearchField";

function HelpHead() {
  return (
    <div
      className="
      w-full max-w-screen-xl flex flex-col py-2 m-auto
      px-4 items-center mb-4 mt-2
      "
    >
      <div className="flex justify-between items-center w-full mb-4 ">
        <h1
          className="
        text-green-black font-bold text-xl 
        lg:text-3xl font-[Poppins] 
        "
        >
          Frequently Asked Questions
        </h1>
      </div>

      <h1
        className="
      font-[DM Sans] text-base font-normal 
      text-[#828282] w-full  
      "
      >
        {onHelpPageData.text}
      </h1>
    </div>
  );
}

export default HelpHead;
