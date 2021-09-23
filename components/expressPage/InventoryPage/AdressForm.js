import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { PencilAltIcon } from "@heroicons/react/outline";

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

// Inspired by blueprintjs
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

const AdressCard = () => (
  <div className=" flex-grow ">
    <h1
      className="
     text-base lg-text-lg text-green-black 
     font-bold font-[DM Sans] mb-2"
    >
      Address
    </h1>
    <p
      className="
      lg:text-base  lg:font-medium 
      text-gray-main font-[DM Sans]
      text-sm font-normal
      "
    >
      081345-678-90
    </p>
    <p
      className="
       lg:text-base  lg:font-medium 
      text-gray-main font-[DM Sans]
      text-sm font-normal
      "
    >
      No. 1 Zik Avenue, Uwani Street, Enugu
    </p>
  </div>
);

const AddressTag = () => (
  <div
    className="
        border rounded-lg p-2 border-gray-200
        w-full flex
        "
  >
    <FormControlLabel
      value="address1"
      control={<StyledRadio />}
      label={<AdressCard />}
    />
    <PencilAltIcon className="h-6 cursor-pointer" />
  </div>
);

function AdressForm() {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        defaultValue="address1"
        aria-label="address"
        name="customized-radios"
      >
        <div className="space-y-2  ">
          <AddressTag />
          <AddressTag />
          <AddressTag />
          <AddressTag />
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default AdressForm;
