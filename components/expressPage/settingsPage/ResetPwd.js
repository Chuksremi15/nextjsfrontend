import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

const schema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Old password is required")
    .min(6, "6 characters minimum"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "8 characters minimum")
    .matches(RegExp("(.*[a-z].*)"), "one lowercase letter")
    .matches(RegExp("(.*[A-Z].*)"), "one uppercase letter")
    .matches(RegExp("(.*\\d.*)"), "one number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "one special character"),
  confirm_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "Password must match"),
});

function ResetPwd() {
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

  const onSubmit = async ({ oldPassword, newPassword }) => {
    console.log(oldPassword, newPassword);
  };

  return (
    <div className="container px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        max-w-screen-sm w-full m-auto px-4
        mt-4 lg:mt-6 h-[60vh]
        "
      >
        <div className="grid gap-4">
          <FormInput
            name="OLD PASSWORD"
            type="text"
            register={{ ...register("oldPassword") }}
            error={errors.oldPassword}
          />
          <FormInput
            name="NEW PASSWORD"
            type="text"
            register={{ ...register("newPassword") }}
            error={errors.newPassword}
          />
          <FormInput
            name="CONFIRM NEW PASSWORD"
            type="text"
            register={{ ...register("confirm_password") }}
            error={errors.confirm_password}
          />
        </div>

        <button
          className="
      max-w-md w-full py-4 rounded-lg m-auto flex
      items-center justify-center mt-10 lg:mt-20
      font-[Poppins] text-white bg-green-main 
      text-base font-bold focus:outline-none 
      "
        >
          {loading ? (
            <CircularProgress color="white" size="20px" />
          ) : (
            " Save Changes"
          )}
        </button>
      </form>
    </div>
  );
}

export default ResetPwd;
