import LoginPortalForm from "./LoginPortalForm";
import { useRouter } from "next/router";

function LoginPortal() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:max-w-md w-full">
      <h1
        className="
        font-[Poppins] text-lg font-bold 
        text-[#001F1D] mb-6 "
      >
        You are logging in as a business
      </h1>
      <LoginPortalForm />

      <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal mt-4">
        Don't have an Portal account?{" "}
        <span
          onClick={() => router.push("/portal/account/register")}
          className="text-green-main font-medium cursor-pointer"
        >
          Create One
        </span>
      </h1>
    </div>
  );
}

export default LoginPortal;
