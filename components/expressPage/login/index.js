import LoginAccount from "./LoginAccount";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Link from "next/link";

function Login() {
  return (
    <div
      className="container 
    min-h-screen 
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
       lg:flex
     lg:justify-evenly flex-grow items-center
      "
      >
        <Welcome
          name="Express"
          desc="View our wide variety of amazing healthcare products lorem ipsum lorem slorem"
          img="/logexpress.png"
        />

        <LoginAccount />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
