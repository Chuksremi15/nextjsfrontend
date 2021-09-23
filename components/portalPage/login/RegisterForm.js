import {
  PhoneIcon,
  UserCircleIcon,
  UserGroupIcon,
  MailIcon,
  LockClosedIcon,
  LockOpenIcon,
  LocationMarkerIcon,
  EyeOffIcon,
  EyeIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";

const schema = yup.object().shape({
  businessName: yup
    .string()
    .required("Business Name is required")
    .min(3, "business name is too short"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long")
    .matches(
      /^(0|\+?234)[7-9]{1}[0-9]{9}$/,
      "Phone number is not a valid Nigerian phone number"
    ),
  username: yup
    .string()
    .required("username is required")
    .min(6, "username is too short")
    .max(32, "username is too long")
    .trim()
    .matches(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric without spacing"),
  email: yup.string().email("email is not valid").required("email is required"),
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
  password: yup
    .string()
    .required("password is required")
    .min(8, "8 characters minimum")
    .matches(RegExp("(.*[a-z].*)"), "one lowercase letter")
    .matches(RegExp("(.*[A-Z].*)"), "one uppercase letter")
    .matches(RegExp("(.*\\d.*)"), "one number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "one special character"),
});

function RegisterForm({ setProcess, setFormData }) {
  const [passType, setPassType] = useState(true);
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

  const onSubmit = (data) => {
    setProcess(1);
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="grid gap-4 lg:gap-6">
        <div>
          <div
            className="
           flex items-center rounded-lg
           px-2 py-1 w-full bg-gray-100 "
          >
            <UserGroupIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              {...register("businessName")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Company / Business Name"
            />
          </div>
          {errors?.businessName && (
            <ErrorMessage message={errors.businessName.message} />
          )}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <UserCircleIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              {...register("username")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Username"
            />
          </div>
          {errors?.username && (
            <ErrorMessage message={errors.username.message} />
          )}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <PhoneIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              {...register("phone")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Phone Number"
            />
          </div>
          {errors?.phone && <ErrorMessage message={errors.phone.message} />}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <MailIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="email"
              {...register("email")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Email Address"
            />
          </div>
          {errors?.email && <ErrorMessage message={errors.email.message} />}
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
                {...register("address" && "address.location")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="address"
              />
              <input
                type="text"
                {...register("address" && "address.street")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="City"
              />
              <input
                type="text"
                {...register("address" && "address.country")}
                className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                placeholder="Country"
              />
            </div>
          </div>
          {errors?.address && (
            <ErrorMessage message="Complete address is required" />
          )}
        </div>

        <div>
          <div
            className="
        flex items-center rounded-lg 
        px-2 py-1 w-full bg-gray-100
        relative
        "
          >
            <LockClosedIcon className="h-6 text-gray-600 mr-2" />
            <input
              type={passType ? "password" : "text"}
              {...register("password")}
              className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Password"
            />
            {passType ? (
              <EyeIcon
                onClick={() => setPassType((type) => !type)}
                className="h-6 text-gray-600 right-4 cursor-pointer absolute"
              />
            ) : (
              <EyeOffIcon
                onClick={() => setPassType((type) => !type)}
                className="h-6 text-gray-600 right-4 cursor-pointer absolute"
              />
            )}
          </div>
          {errors?.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>
      </div>

      <button
        type="submit"
        className="
        w-full bg-green-main py-4 active:border mt-6 focus:outline-none
        text-green-sub3 font-bold text-base rounded-xl "
      >
        Next
      </button>
    </form>
  );
}

export default RegisterForm;
