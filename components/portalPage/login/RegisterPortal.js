import CreateProcess from "./CreateProcess";
import { useRouter } from "next/router";

function RegisterPortal() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:max-w-md w-full">
      <h1
        className="font-[Poppins] text-lg lg:text-xl
      font-bold text-[#001F1D] mb-4 "
      >
        You are creating account as a customer
      </h1>
      <CreateProcess />
      <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal mt-4">
        Already have a Portal account?{" "}
        <span
          onClick={() => router.push("/portal/account/login")}
          className="text-green-main font-medium cursor-pointer"
        >
          Log in
        </span>
      </h1>
    </div>
  );
}

export default RegisterPortal;
