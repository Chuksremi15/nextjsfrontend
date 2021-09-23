import { useState } from "react";
import CustomDrop from "../../generalComponents.js/CustomDrop";
import FormInput from "../../generalComponents.js/form/FormInput";
import LocationInput from "../../generalComponents.js/form/LocationInput";
import SetBtn from "../../generalComponents.js/form/SetBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePortalUserState } from "../../../store/user.store";

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
    .matches(/^(0|\+?234)[7-9]{1}[0-9]{9}$/, "Phone number is not valid"),
  email: yup.string().email("email is not valid").required("email is required"),
  address: yup
    .object()
    .default(null)
    .required("Location is required")
    .shape({
      location: yup.string().required("location is required"),
      street: yup.string().required("street is required"),
      country: yup.string().required("country is reqiured"),
    }),
  deliveryAddress: yup.object().default(null).nullable().shape({
    location: yup.string(),
    street: yup.string(),
    country: yup.string(),
  }),
});

function BussinessForm() {
  const { portalUserData } = usePortalUserState();
  const [selectChoice, setSelectChoice] = useState("");
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
    //check default values
    defaultValues: {
      businessName: portalUserData?.user?.businessName,
      phone: portalUserData?.user?.phone,
      email: portalUserData?.user?.email,
      address: portalUserData?.user?.address,
      deliveryAddress: portalUserData?.user?.deliveryAddress,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div
        className="
       grid gap-x-4 gap-y-6
       md:grid-cols-2
       "
      >
        <FormInput
          name="COMPANY / BUSINESS NAME"
          type="text"
          register={{ ...register("businessName") }}
          error={errors.businessName}
        />

        <div className="space-y-2">
          <h1
            className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
          >
            BUSINESS TYPE
          </h1>
          <CustomDrop
            selectChoice={selectChoice}
            setSelectChoice={setSelectChoice}
            defaultChoice={portalUserData?.user?.businessType}
            selectOptions={[
              "Pharmacy",
              "Hospital",
              "Clinic",
              "Carton",
              "Care Homes",
            ]}
            desc
          />
        </div>

        <FormInput
          name="PHONE NUMBER"
          type="text"
          register={{ ...register("phone") }}
          error={errors.phone}
        />
        <FormInput
          name="EMAIL ADDRESS"
          type="text"
          register={{ ...register("email") }}
          error={errors.email}
        />
        <LocationInput
          name="ADDRESS 1 (For Delivery)"
          location={{ ...register("address" && "address.location") }}
          street={{ ...register("address" && "address.street") }}
          country={{ ...register("address" && "address.country") }}
          error={errors.address}
        />
        <LocationInput
          name="ADDRESS 2 (For Delivery)"
          location={{
            ...register("deliveryAddress" && "deliveryAddress.location"),
          }}
          street={{
            ...register("deliveryAddress" && "deliveryAddress.street"),
          }}
          country={{
            ...register("deliveryAddress" && "deliveryAddress.country"),
          }}
          error={errors.address}
        />
      </div>
      <SetBtn text="SAVE CHANGES" className="mt-32" loading={loading} />
    </form>
  );
}

export default BussinessForm;
