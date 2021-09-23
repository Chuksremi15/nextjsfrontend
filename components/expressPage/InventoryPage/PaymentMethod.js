import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#00A69C",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const MethodOption = ({ title, desc }) => (
  <div className="m-auto max-w-80">
    <h1
      className="
      text-base md:text-lg text-green-black font-bold
      font-[DM Sans] "
    >
      {title}
    </h1>
    <p
      className="
      text-sm lg:text-base font-medium text-gray-main font-[DM Sans]
      "
    >
      {desc}
    </p>
  </div>
);

const PaymentSelect = ({ portal }) => (
  <FormControl component="fieldset">
    <RadioGroup
      defaultValue="paynow"
      aria-label="address"
      name="customized-radios"
    >
      <div className="space-y-2">
        {portal && (
          <div
            className="
        border rounded-lg p-2 border-gray-200 w-full
        "
          >
            <FormControlLabel
              value="payWallet"
              control={<StyledRadio />}
              label={
                <MethodOption
                  title="E-wallet Payment"
                  desc="Pay with E-wallet"
                />
              }
            />
          </div>
        )}
        <div
          className="
        border rounded-lg p-2 border-gray-200 w-full
        "
        >
          <FormControlLabel
            value="paynow"
            control={<StyledRadio />}
            label={
              <MethodOption
                title="Online Payment"
                desc="Payment through paystack"
              />
            }
          />
        </div>
        <div
          className="
        border rounded-lg p-2 border-gray-200 w-full
        "
        >
          <FormControlLabel
            value="payondelivery"
            control={<StyledRadio />}
            label={
              <MethodOption
                title="Pay on Delivery"
                desc="Package will be delivered to your door step, then"
              />
            }
          />
        </div>
      </div>
    </RadioGroup>
  </FormControl>
);

function PaymentMethod({ handleclose, setInventory, portal }) {
  return (
    <div className="flex flex-col h-full  ">
      <div className="">
        <div className="flex items-center justify-between">
          <XIcon
            onClick={() => handleclose()}
            className="h-6 text-gray-main mb-4 cursor-pointer"
          />
          <div onClick={() => setInventory(1)} className="flex items-center">
            <ArrowNarrowLeftIcon
              className="
          h-6 text-gray-main cursor-pointer
          "
            />
            <h1
              className="
            text-xs lg:text-sm text-green-black font-bold
             font-[Poppins] ml-2 cursor-pointer
            "
            >
              back
            </h1>
          </div>
        </div>
        <h1
          className="
            text-xl text-green-black font-bold
             font-[Poppins] mb-6
            "
        >
          Payment Method
        </h1>
        <PaymentSelect portal={portal} />
      </div>

      <div
        onClick={() => setInventory(3)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mt-auto
        cursor-pointer flex justify-center w-full mx-auto
        "
      >
        Pay Now @ ₦5,900
      </div>
    </div>
  );
}

export default PaymentMethod;
