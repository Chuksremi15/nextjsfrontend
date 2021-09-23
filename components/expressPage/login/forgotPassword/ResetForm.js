import {
  LockClosedIcon,
  LockOpenIcon,
  EyeIcon,
  EyeOffIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../../../generalComponents.js/form/ErrorMessage";
import { resetPassword } from "../../../../services/express/auth.service";

//yub validation schemas
const schema = yup.object().shape({
  email: yup.string().email("email is not valid").required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "8 characters minimum")
    .matches(RegExp("(.*[a-z].*)"), "one lowercase letter")
    .matches(RegExp("(.*[A-Z].*)"), "one uppercase letter")
    .matches(RegExp("(.*\\d.*)"), "one number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "one special character"),
  confirm_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

function ResetForm() {
  //next router
  const router = useRouter();
  //useform hook
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
  });

  //state to toggle password type
  const [passType, setPassType] = useState(true);

  //function to handle reset password form submit
  const onSubmit = async ({ email, password }) => {
    const res = await resetPassword({ email, password });
    alert(res.message);
  };

  //takes user to login page
  const goLogin = () => {
    router.push("/express/login");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        flex max-w-lg w-full flex-col px-4
        "
    >
      <div className="w-full grid gap-2">
        <h1
          className="
        text-xl text-white font-semibold 
        font-[Poppins] mb-6
        "
        >
          Reset Password
        </h1>
        <div>
          <div
            className="
        flex items-center rounded-lg px-2 
        py-1 w-full bg-gray-100  bg-opacity-40"
          >
            <MailIcon className="h-6 text-white mr-2" />
            <input
              type="email"
              {...register("email")}
              className="
              py-2 px-4 rounded-md bg-transparent-main  
              flex-grow  focus:outline-none text-white
              placeholder-white  placeholder-opacity-75
              "
              placeholder="email"
            />
          </div>

          {errors?.email && <ErrorMessage message={errors.email.message} />}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2
        py-1 w-full bg-gray-100  bg-opacity-40"
          >
            <LockOpenIcon className="h-6 text-white mr-2" />
            <input
              {...register("password")}
              type={passType ? "password" : "text"}
              className="
              py-2 px-4 rounded-md bg-transparent-main  
              flex-grow  focus:outline-none text-white
              placeholder-white  placeholder-opacity-75
              "
              placeholder="Password"
            />
            {passType ? (
              <EyeOffIcon
                onClick={() => setPassType((type) => !type)}
                className="
              h-6 text-white mr-2 cursor-pointer "
              />
            ) : (
              <EyeIcon
                onClick={() => setPassType((type) => !type)}
                className="h-6 text-white mr-2 cursor-pointer "
              />
            )}
          </div>
          {errors?.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2 
        py-1 w-full bg-gray-100  bg-opacity-40"
          >
            <LockClosedIcon className="h-6 text-white mr-2" />
            <input
              type="password"
              {...register("confirm_password")}
              className="
              py-2 px-4 rounded-md bg-transparent-main  
              flex-grow  focus:outline-none text-white
              placeholder-white  placeholder-opacity-75
              "
              placeholder="comfirm password"
            />
          </div>

          {errors?.confirm_password && (
            <ErrorMessage message={errors.confirm_password.message} />
          )}
        </div>
        <button
          type="submit"
          className="
        w-full items-center py-4 bg-white 
        text-green-main font-[Poppins] font-bold
        focus:outline-none rounded-lg mt-20
        "
        >
          Reset
        </button>
        <h1
          className="
        text-sm text-white font-normal 
        font-[Poppins]
        "
        >
          Already have an Express account?{"    "}
          <span
            onClick={goLogin}
            className="text-base cursor-pointer font-semibold"
          >
            Log in
          </span>
        </h1>
      </div>
    </form>
  );
}

export default ResetForm;
