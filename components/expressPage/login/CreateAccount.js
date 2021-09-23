import SignUpForm from "./SignUpForm";
import { useRouter } from "next/router";

function CreateAccount() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:max-w-lg w-full">
      <h1
        className="font-[Poppins] text-lg lg:text-xl
      font-bold text-[#001F1D] mb-4 "
      >
        You are creating account as a customer
      </h1>

      {/* <div className="flex items-center justify-around space-x-2 mb-4 md:mb-6 ">
        <div
          className=" 
        p-2 flex border-2 border-gray-200  
        rounded-xl items-center cursor-pointer"
        >
          <img src="/fb.png" alt="" className="h-8 w-8 mr-2" />
          <h1
            className="font-[Poppins] text-center
           text-sm font-semibold text-[#001F1D] "
          >
            Sign up with Facebook
          </h1>
        </div>

        <div
          className="
        p-2 flex border-2 border-gray-200  
        rounded-xl items-center cursor-pointer
        "
        >
          <img src="/ggl.png" alt="" className="h-8 w-8 mr-2" />
          <h1 className="font-[Poppins] text-center text-sm font-semibold text-[#001F1D] ">
            Sign up with Google
          </h1>
        </div>
      </div> */}

      {/* <div className="flex items-center justify-evenly mb-4 md:mb-16">
        <hr className="bg-gray-600 w-1/5 font-bold " />
        <h1
          className="
            font-[DM Sans] text-lg text-center text-[#BDBDBD] 
            w-3/5  md:w-2/5 lg:w-3/5 font-medium  md:font-semibold md:text-xl
            "
        >
          or sign up with email
        </h1>
        <hr className="bg-gray-600 w-1/5 " />
      </div> */}

      <SignUpForm />

      <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal mt-2">
        Already have an Express account?{" "}
        <span
          onClick={() => router.push("/express/account/login")}
          className="text-green-main font-medium cursor-pointer"
        >
          Log in
        </span>
      </h1>
    </div>
  );
}

export default CreateAccount;
