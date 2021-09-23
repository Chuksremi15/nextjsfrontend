import BlogCard from "./SubComponents/BlogCard";
import Newsletter from "./SubComponents/Newsletter";

function BolgGallery() {
  return (
    <div
      className="
      flex flex-col px-4 py-8 items-center
    max-w-screen-xl w-full m-auto
    "
    >
      <h1 className="font-[Poppins] text-2xl font-bold text-[#001F1D] text-center mb-8 max-w-screen-md w-full">
        Be the first to see new medical insights on our blog and follow medical
        developments from around the world by subscribing to our newsletter.
      </h1>

      <div className=" flex items-center space-x-4 overflow-x-scroll w-full scrollbar-hide mb-8">
        <BlogCard
          title={
            " Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19"
          }
          img={"/blogimg.svg"}
          caption={
            " Accelerating the Pace of any a Oncology Clinical Trials in the Wake of COVID-19 specimens that are going to be there for the mesuring on the walls on the drug."
          }
          genre={"Popular"}
        />
        <BlogCard
          title={
            " Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19"
          }
          img={"/blogimg.svg"}
          caption={
            " Accelerating the Pace of any a Oncology Clinical Trials in the Wake of COVID-19 specimens that are going to be there for the mesuring on the walls on the drug."
          }
          genre={"Popular"}
        />
        <BlogCard
          title={
            " Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19"
          }
          img={"/blogimg.svg"}
          caption={
            " Accelerating the Pace of any a Oncology Clinical Trials in the Wake of COVID-19 specimens that are going to be there for the mesuring on the walls on the drug."
          }
          genre={"Popular"}
        />
        <BlogCard
          title={
            " Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19"
          }
          img={"/blogimg.svg"}
          caption={
            " Accelerating the Pace of any a Oncology Clinical Trials in the Wake of COVID-19 specimens that are going to be there for the mesuring on the walls on the drug."
          }
          genre={"Popular"}
        />
      </div>

      <Newsletter />
    </div>
  );
}

export default BolgGallery;
