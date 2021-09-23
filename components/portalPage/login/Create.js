import Link from "next/link";
import Footer from "../../expressPage/login/Footer";
import Welcome from "../../expressPage/login/Welcome";
import RegisterPortal from "./RegisterPortal";

function Create() {
  return (
    <div
      className="container 
    min-h-screen bg-gray-50
    py-4 px-6 flex flex-col"
    >
      <Link href="/">
        <img
          src="/mainman.png"
          alt=""
          className="
      h-10 cursor-pointer 
     w-40 lg:w-48 mb-6 lg:mb-10"
        />
      </Link>
      <div
        className="
      lg:space-x-10 lg:flex
     lg:justify-evenly  items-center
      "
      >
        <Welcome
          name="Portal"
          desc="View our wide variety of amazing healthcare products lorem ipsum lorem slorem"
          img="/loginPortal.png"
        />

        <RegisterPortal />
      </div>
      <Footer />
    </div>
  );
}

export default Create;
