import { useRouter } from "next/router";
import FormInput from "./FormInput";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import * as yup from "yup";
import LocationInput from "../../generalComponents.js/form/LocationInput";
import { alegicOptions } from "../../../contents/onSettings";
import { useEffect, useState } from "react";
import { UpdateButton } from "../../buttons";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postUpdateUserRequest } from "../../../redux/actions/auth";
import toast from "react-hot-toast";
import Avatar from "../../generalComponents.js/Avatar";
import Button from "../../generalComponents.js/Button";

const animatedComponents = makeAnimated();

const options = [
  { value: "maleria", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function ProfileForm() {
  const dispatch = useDispatch();

  const router = useRouter();

  const [allergies, setAllergies] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      // email: "",
      address: "",
      deliveryAddress: "",
      age: "",
      weight: "",
      bloodGroup: "",
      genotype: "",
    },
    validationSchema: yup.object({
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
      phone: yup
        .string()
        .required("Phone Number is required")
        .min(10, "Phone number is too short")
        .max(15, "Phone number is too long")
        .matches(
          /^(0|\+?234)[7-9]{1}[0-9]{9}$/,
          "Phone number is not a valid Nigerian phone number"
        ),
      // email: yup
      //   .string()
      //   .email("email is not valid")
      //   .required("email is required"),
      address: yup
        .object()
        .default(null)
        .required("Location is required")
        .shape({
          location: yup.string().required("location is required"),
          state: yup.string().required("street is required"),
          country: yup.string().required("country is reqiured"),
        }),
      deliveryAddress: yup.object().default(null).nullable().shape({
        location: yup.string(),
        state: yup.string(),
        country: yup.string(),
      }),
      //validate age
      age: yup
        .number("Age in numbers")
        .default(null)
        .nullable()
        .min(18, "Age must be 18 or above")
        .max(100, "Age must be less than 100"),
      //validate weight
      weight: yup
        .number("Weight in numbers")
        .default(null)
        .nullable()
        .min(20, "Weight must be 20Kg or above")
        .max(200, "Weight must be less than 200Kg"),
      //validate blood group
      bloodGroup: yup
        .string()
        .default(null)
        .nullable()
        .matches(/^(A|B|AB|O)[+-]$/, "Blood group is not valid"),
      //validate genotype
      genotype: yup
        .string()
        .default(null)
        .nullable()
        .matches(/^(AA|AS|SS|AC)$/, "Genotype is not valid"),
    }),

    onSubmit: (prop) => {
      let formData = prop;

      console.log({ formData, token });

      dispatch(postUpdateUserRequest({ formData, token }));
    },
  });

  useEffect(() => {
    if (user) {
      formik.setValues((values) => ({
        ...values,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        // email: user.email,
        address: user.address,
        deliveryAddress: user.deliveryAddress,
        age: user.age,
        weight: user.weight,
        bloodGroup: user.bloodGroup,
        genotype: user.genotype,
      }));
    }
  }, [user]);

  const {
    user,
    postUpdateUserError,
    postUpdateUserSuccess,
    postUpdateUserLoading,
    token,
  } = useSelector((state) => {
    const {
      success: { postUpdateUser: postUpdateUserSuccess },
      errors: { postUpdateUser: postUpdateUserError },
    } = state.ajaxStatuses;

    const { postUpdateUserLoading } = state.loadingIndicator;
    const {
      user: { user, token },
    } = state.personalInformationData;

    return {
      user,
      postUpdateUserError,
      postUpdateUserSuccess,
      token,
      postUpdateUserLoading,
    };
  });

  useEffect(() => {
    if (postUpdateUserError) {
      toast.error(postUpdateUserError, {
        duration: 4000,
      });
    }
  }, [postUpdateUserError]);

  useEffect(() => {
    if (postUpdateUserSuccess) {
      toast.success("Profile Updated", {
        duration: 4000,
      });
      router.push("/express");
    }
  }, [postUpdateUserSuccess]);

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <h1
          className="
        text-gray-main bg-gray-200 px-2 py-1 rounded-md
        font-[DM Sans] font-medium text-xs md:text-sm mr-4 md:mr-8
        "
        >
          User ID: {user._id}
        </h1>
        <div className="flex items-center space-x-2 md:space-x-6">
          <Avatar
            src="/designer.jpg"
            className="transform scale-125 lg:scale-150"
          />
          <Button
            className="text-green-main bg-[white] 
        border  border-green-main"
            text="Update Profile Image"
          />
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="px-4">
        <div className="divide-y divide-gray-200">
          <div className="space-y-4 mb-4 ">
            <div className="grid gap-4 lg:grid-cols-2">
              <FormInput
                name="FIRST NAME"
                type="text"
                register={{ ...formik.getFieldProps("firstName") }}
                error={formik.errors.firstName}
                errorTouched={formik.touched.firstName}
              />

              <FormInput
                name="LAST NAME"
                type="text"
                register={{ ...formik.getFieldProps("lastName") }}
                error={formik.errors.lastName}
                errorTouched={formik.touched.lastName}
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <FormInput
                name="PHONE NUMBER"
                type="text"
                register={{ ...formik.getFieldProps("phone") }}
                error={formik.errors.phone}
                errorTouched={formik.touched.phone}
              />
              {/* <FormInput
              name="EMAIL ADDRESS"
              type="text"
              register={{ ...formik.getFieldProps("email") }}
              error={formik.errors.email}
              errorTouched={formik.touched.email}
            /> */}
            </div>

            <div className="grid gap-4 lg:grid-cols-2 ">
              <LocationInput
                name="ADDRESS 1 (For Delivery)"
                location={{
                  ...formik.getFieldProps("address" && "address.location"),
                }}
                state={{
                  ...formik.getFieldProps("address" && "address.state"),
                }}
                country={{
                  ...formik.getFieldProps("address" && "address.country"),
                }}
                error={formik.errors.address}
              />
              <LocationInput
                name="ADDRESS 2 (For Delivery)"
                location={{
                  ...formik.getFieldProps(
                    "deliveryAddress" && "deliveryAddress.location"
                  ),
                }}
                state={{
                  ...formik.getFieldProps(
                    "deliveryAddress" && "deliveryAddress.state"
                  ),
                }}
                country={{
                  ...formik.getFieldProps(
                    "deliveryAddress" && "deliveryAddress.country"
                  ),
                }}
                error={formik.errors.deliveryAddress}
              />
            </div>
          </div>
          <div className=" space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  mt-4">
              <FormInput
                name="AGE"
                type="text"
                register={{ ...formik.getFieldProps("age") }}
                error={formik.errors.age}
                errorTouched={formik.touched.age}
              />
              <FormInput
                name="WEIGHT(kg)"
                type="text"
                register={{ ...formik.getFieldProps("weight") }}
                error={formik.errors.weight}
                errorTouched={formik.touched.weight}
              />
              <FormInput
                name="BLOOD GROUPS"
                type="text"
                register={{ ...formik.getFieldProps("bloodGroup") }}
                error={formik.errors.bloodGroup}
                errorTouched={formik.touched.bloodGroup}
              />
              <FormInput
                name="GENOTYPE"
                type="text"
                register={{ ...formik.getFieldProps("genotype") }}
                error={formik.errors.genotype}
                errorTouched={formik.touched.genotype}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2 ">
              <div className="space-y-2">
                <h1
                  className="
                      text-sm md:text-base font-[DM Sans]
                      font-semibold text-green-black
                      "
                >
                  Health concerns
                </h1>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={options}
                  isMulti
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 8,
                    colors: {
                      ...theme.colors,

                      primary: "#E2E8F0",
                    },
                  })}
                />
              </div>
              <div className="space-y-2">
                <h1
                  className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
                >
                  Health Alegies
                </h1>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={alegicOptions}
                  isMulti
                  onChange={(value) => setAllergies(value)}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 8,
                    colors: {
                      ...theme.colors,

                      primary: "#E2E8F0",
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <UpdateButton
          loading={postUpdateUserLoading}
          disable={!(formik.dirty && formik.isValid)}
          action={formik.handleSubmit}
        />
      </form>
    </div>
  );
}

export default ProfileForm;
