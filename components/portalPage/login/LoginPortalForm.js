import { UserCircleIcon } from "@heroicons/react/outline";
import { LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../../redux/actions/auth";
import { AuthButton, PortalAuthButton } from "../../buttons";
import toast from "react-hot-toast";

function LoginPortalForm() {
  const router = useRouter();
  const [passType, setPassType] = useState(true);

  const goForgotten = () => {
    router.push("/portal/login/forgotPassword");
  };

  const { loginSuccess, loginError, loginLoading, isLoggedIn } = useSelector(
    (state) => {
      const {
        success: { login: loginSuccess },
        errors: { login: loginError },
      } = state.ajaxStatuses;

      const { loginLoading } = state.loadingIndicator;

      const { isLoggedIn } = state.personalInformationData;

      return {
        loginSuccess,
        loginError,
        loginLoading,
        isLoggedIn,
      };
    }
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
    validationSchema: yup.object({
      emailOrUsername: yup.string().required("email or username is required"),
      password: yup
        .string()
        .required("password is required")
        .min(6, "6 characters minimum"),
    }),

    onSubmit: (prop) => {
      console.log(prop);
      dispatch(loginRequest(prop));
    },
  });

  useEffect(() => {
    if (loginError) {
      toast.error(loginError, {
        duration: 4000,
      });
    }
  }, [loginError]);

  useEffect(() => {
    if (loginSuccess) {
      router.push("/portal");
    }
  }, [loginSuccess]);

  useLayoutEffect(() => {
    if (isLoggedIn) {
      router.replace("/portal");
    }
  }, [isLoggedIn]);

  return (
    <form className="flex flex-col ">
      <div className="flex flex-col space-y-3 md:space-y-4 mb-16">
        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <UserCircleIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              {...formik.getFieldProps("emailOrUsername")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Username or Email Address"
            />
          </div>
          {formik.errors.emailOrUsername && (
            <ErrorMessage message={formik.errors.emailOrUsername} />
          )}
        </div>

        <div>
          <div className="flex items-center rounded-lg mb-4 px-2 py-1 w-full bg-gray-100 ">
            <LockClosedIcon className="h-6 text-gray-600 mr-2" />
            <input
              type={passType ? "password" : "text"}
              {...formik.getFieldProps("password")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="password"
            />
            {passType ? (
              <EyeIcon
                onClick={() => setPassType((type) => !type)}
                className="
              h-6 text-gray-600 mr-2 cursor-pointer "
              />
            ) : (
              <EyeOffIcon
                onClick={() => setPassType((type) => !type)}
                className="h-6 text-gray-600 mr-2 cursor-pointer "
              />
            )}
          </div>
          {formik.errors.password && (
            <ErrorMessage message={formik.errors.password} />
          )}
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <input type="text" hidden value="Portal" />
            <input
              type="checkbox"
              className="
              mr-2 cursor-pointer form-checkbox 
              border-2 border-gray-200 rounded-sm 
              text-green-main"
            />
            <h1 className="font-[DM Sans] text-sm font-semibold text-[#BDBDBD]">
              Keep me logged in
            </h1>
          </div>

          <h1
            onClick={goForgotten}
            className="font-[DM Sans] text-base font-semibold text-[#828282] cursor-pointer"
          >
            Forgot password?
          </h1>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <PortalAuthButton
          loading={loginLoading}
          disable={!(formik.dirty && formik.isValid)}
          action={formik.handleSubmit}
        />
      </div>
    </form>
  );
}

export default LoginPortalForm;
