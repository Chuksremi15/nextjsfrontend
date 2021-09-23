import { useRouter } from "next/router";
import LoginForm from "./LoginForm";

function LoginAccount() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:max-w-lg w-full">
      <h1
        className="
      font-[Poppins] text-lg lg:text-xl 
      font-bold text-[#001F1D] mb-4
      "
      >
        You are logging in as a customer
      </h1>

      {/* <div className="flex items-center justify-around space-x-2 mb-4 md:mb-6 ">
        <div
          onClick={facebookLogin}
          className=" p-2 flex border-2 border-gray-200  
          rounded-xl items-center cursor-pointer"
        >
          <img src="/fb.png" alt="" className="h-8 w-8 mr-2" />
          <h1
            className="
            font-[Poppins]  text-sm  text-center
            font-semibold text-[#001F1D] "
          >
            Log in with Facebook
          </h1>
        </div>

        <div
          onClick={googleLogin}
          className=" 
          p-2 flex border-2 border-gray-200  
          rounded-xl items-center cursor-pointer"
        >
          <img src="/ggl.png" alt="" className="h-8 w-8 mr-2" />
          <h1 className="font-[Poppins] text-sm font-semibold text-center text-[#001F1D] ">
            Log in with Google
          </h1>
        </div>
      </div> */}

      {/* <div className="flex items-center justify-evenly mb-4 md:mb-16">
        <hr className="bg-gray-600 w-1/5 font-bold " />
        <h1
          className="
            font-[DM Sans] text-lg text-center text-[#BDBDBD] 
            w-3/5  md:w-2/5 lg:w-3/5 font-medium  md:font-semibold 
            "
        >
          or log in with email
        </h1>
        <hr className="bg-gray-600 w-1/5 " />
      </div> */}

      <LoginForm />

      <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal mt-4">
        Don't have an Express account?{" "}
        <span
          onClick={() => router.push("/express/account/register")}
          className="text-green-main font-medium cursor-pointer"
        >
          Create One
        </span>
      </h1>
    </div>
  );
}

export default LoginAccount;
