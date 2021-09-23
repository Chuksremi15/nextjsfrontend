import { MailIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { forgotPassword } from "../../../../services/express/auth.service";
import ErrorMessage from "../../../generalComponents.js/form/ErrorMessage";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("email is not valid").required("email is required"),
});

function ForgotForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async ({ email }) => {
    setLoading(true);
    const res = await forgotPassword({ email: email });
    alert(res.message);
    setLoading(false);
  };

  const goLogin = () => {
    router.push("/express/account/login");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        flex max-w-lg w-full flex-col px-4
        "
    >
      <div className="w-full">
        <div className="mb-6">
          <h1
            className="
        text-xl text-white font-semibold 
        font-[Poppins] 
        "
          >
            Forgot Password?
          </h1>
        </div>
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
              placeholder="Email Address"
            />
          </div>
          {errors?.email && <ErrorMessage message={errors.email.message} />}
        </div>

        <button
          type="submit"
          className="
        w-full items-center py-4 bg-white 
        text-green-main font-[Poppins] font-bold
        focus:outline-none rounded-lg mt-20
        "
        >
          {loading ? (
            <CircularProgress color="#00A69C" size="20px" />
          ) : (
            " Reset"
          )}
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

export default ForgotForm;
