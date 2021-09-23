import dataOnLandingPage from "../../contents/onLandingPage";

function Comment() {
  return (
    <div
      className="
        flex flex-col px-6 py-10 bg-green-sub3
        max-w-screen-xl w-full m-auto items-left
        "
    >
      <h1
        className="
      font-[DM Sans] lg:text-base font-semibold 
      text-green-main mb-2 text-center text-sm
      "
      >
        {dataOnLandingPage?.ourVisionData.title}
      </h1>
      <h1
        className="
      font-[Poppins] font-bold lg:text-3xl 
      text-[#001F1D] text-center text-xl
      max-w-screen-lg m-auto
      "
      >
        {dataOnLandingPage?.ourVisionData.subTitle}
      </h1>
    </div>
  );
}

export default Comment;
