import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  UserCircleIcon,
  UsersIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../../redux/actions/auth";
import toast from "react-hot-toast";
import { RegisterButton } from "../../buttons";

function SignUpForm() {
  //state for password eye toggle
  const [passType, setPassType] = useState(true);
  const router = useRouter();

  const { registerSuccess, registerError, registerLoading, isLoggedIn } =
    useSelector((state) => {
      const {
        success: { register: registerSuccess },
        errors: { register: registerError },
      } = state.ajaxStatuses;

      const { registerLoading } = state.loadingIndicator;

      const { isLoggedIn } = state.personalInformationData;

      return {
        registerSuccess,
        registerError,
        registerLoading,
        isLoggedIn,
      };
    });

  useEffect(() => {
    if (registerError) {
      toast.error(registerError, {
        duration: 4000,
      });
    }
  }, [registerError]);

  useEffect(() => {
    if (registerSuccess) {
      router.push("/express");
    }
  }, [registerSuccess]);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      address: {
        location: "",
        street: "",
        country: "",
      },
      userType: "Express",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("username is required")
        .min(4, "username is too short")
        .max(32, "username is too long")
        .trim()
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Username must be alphanumeric without spacing"
        ),
      firstName: yup
        .string()
        .required("First name is required")
        .min(4, "First name is too short")
        .max(32, "First name is too long")
        .trim()
        .matches(
          /^[a-zA-Z]+$/,
          "First name must be alphabetic without spacing"
        ),
      lastName: yup
        .string()
        .required("Last name is required")
        .min(4, "Last name is too short")
        .max(32, "Last name is too long")
        .trim()
        .matches(/^[a-zA-Z]+$/, "Last name must be alphabetic without spacing"),
      username: yup
        .string()
        .required("username is required")
        .min(4, "username is too short")
        .max(32, "username is too long")
        .trim()
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Username must be alphanumeric without spacing"
        ),
      email: yup
        .string()
        .email("email is not valid")
        .required("email is required"),
      address: yup
        .object()
        .default(null)
        .nullable()
        .required("Location is required")
        .shape({
          location: yup.string().required("location is required"),
          street: yup.string().required("street is required"),
          country: yup.string().required("country is reqiured"),
        }),
      phone: yup
        .string()
        .required("Phone Number is required")
        .min(10, "Phone number is too short")
        .max(15, "Phone number is too long")
        .matches(
          /^(0|\+?234)[7-9]{1}[0-9]{9}$/,
          "Phone number is not a valid Nigerian number"
        ),
      password: yup
        .string()
        .required("password is required")
        .min(6, "6 characters minimum")
        .matches(RegExp("(.*[a-z].*)"), "one lowercase letter")
        .matches(RegExp("(.*[A-Z].*)"), "one uppercase letter")
        .matches(RegExp("(.*\\d.*)"), "one number")
        .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "one special character"),
    }),

    onSubmit: (prop) => {
      console.log(prop);
      dispatch(registerRequest(prop));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="grid gap-8 ">
      <div className="grid gap-4">
        <div className="">
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <UserCircleIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              {...formik.getFieldProps("username")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Username"
            />
          </div>

          {formik.errors.username && formik.touched.username && (
            <ErrorMessage message={formik.errors.username} />
          )}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <UsersIcon className="h-6 flex-shrink-0 text-gray-600 mr-2 cursor-pointer" />
            <div className="grid gap-2 grid-cols-2 divide-gray-800 divide-x-2">
              <input
                type="text"
                {...formik.getFieldProps("firstName")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="First Name"
              />
              <input
                type="text"
                {...formik.getFieldProps("lastName")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid gap-2 grid-cols-2">
            {formik.errors.firstName && formik.touched.firstName && (
              <ErrorMessage message={formik.errors.firstName} />
            )}

            {formik.errors.lastName && formik.touched.lastName && (
              <ErrorMessage message={formik.errors.lastName} />
            )}
          </div>
        </div>

        <div className="">
          <div className="flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 ">
            <MailIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              {...formik.getFieldProps("email")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Email"
            />
          </div>

          {formik.errors.email && formik.touched.email && (
            <ErrorMessage message={formik.errors.email} />
          )}
        </div>
        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <PhoneIcon className="h-6 text-gray-600 mr-2" />
            <p className="">+234</p>
            <input
              type="text"
              {...formik.getFieldProps("phone")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Phone Number"
            />
          </div>

          {formik.errors.phone && formik.touched.phone && (
            <ErrorMessage message={formik.errors.phone} />
          )}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <LocationMarkerIcon className="h-6 flex-shrink-0 text-gray-600 mr-2 cursor-pointer" />
            <div className="grid gap-2 grid-cols-3">
              <input
                type="text"
                {...formik.getFieldProps("address" && "address.location")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="Address"
              />
              <input
                type="text"
                {...formik.getFieldProps("address" && "address.street")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="City"
              />
              <input
                type="text"
                value="Nigeria"
                {...formik.getFieldProps("address" && "address.country")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="Country"
              />
            </div>
          </div>

          {formik.errors.address && formik.touched.address && (
            <ErrorMessage message="Complete address is required" />
          )}
        </div>

        <div className="">
          <div
            className="
        flex items-center rounded-lg px-2 
        py-1 w-full bg-gray-100 "
          >
            <LockClosedIcon className="h-6 text-gray-600 mr-2" />
            <input
              type={passType ? "password" : "text"}
              // {...register("password")}
              {...formik.getFieldProps("password")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Password"
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
          {formik.errors.password && formik.touched.password && (
            <ErrorMessage message={formik.errors.password} />
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...formik.getFieldProps("newsletter")}
            className="mr-2 cursor-pointer form-checkbox border-2 border-gray-200 rounded-sm text-green-main"
          />

          <h1 className="font-[DM Sans] text-sm font-semibold text-[#BDBDBD]">
            I want to recieve Midl Man Newsletter
          </h1>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal ">
          By creating an account, you are agreeing to all our{" "}
          <span className=" text-green-main font-medium">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="text-green-main font-medium">Privacy Policy</span>
        </h1>

        <RegisterButton
          loading={registerLoading}
          disable={!(formik.dirty && formik.isValid)}
          action={formik.handleSubmit}
        />
      </div>
    </form>
  );
}

export default SignUpForm;
