import onAboutPageData from "../../contents/onAboutPage";

function Possibilities() {
  return (
    <div
      className="
      w-full max-w-screen-xl flex flex-col py-6 lg:py-12 m-auto
      px-6 bg-[#FAFAFA]
      "
    >
      <div
        className="
      flex flex-col lg:flex-row lg:justify-between
      mb-8 lg:mb-12
      "
      >
        <h1
          className="
        mb-2 text-[#001F1D] font-bold text-xl 
        lg:text-2xl font-[Poppins] max-w-xl
        "
        >
          {onAboutPageData.ourPossibility.title}
        </h1>
        <h1
          className="
        font-[DM Sans] text-base font-normal 
        text-[#001F1D] max-w-2xl
        "
        >
          {onAboutPageData.ourPossibility.text}
        </h1>
      </div>
      <img
        src={onAboutPageData.ourPossibility.bannerImg}
        alt=""
        className="lg:h-[400px] h-[200px]"
      />
    </div>
  );
}

export default Possibilities;
