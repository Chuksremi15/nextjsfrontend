import { CircularProgress } from "@material-ui/core";

const avoidSubmit = () => {
  return null;
};

export const AuthButton = ({ loading, disable, action }) => {
  return (
    <button
      onClick={disable ? avoidSubmit : action}
      className={
        disable
          ? `
        w-full bg-green-main py-4 active:border
        text-green-sub3 font-bold text-base rounded-xl 
        focus:outline-none cursor-pointer
        `
          : `w-full bg-green-main py-4 active:border
        text-green-sub3 font-bold text-base rounded-xl 
        focus:outline-none cursor-pointer`
      }
    >
      {loading ? <CircularProgress color="white" size="20px" /> : " Log In"}
    </button>
  );
};
export const PortalAuthButton = ({ loading, disable, action }) => {
  return (
    <button
      onClick={disable ? avoidSubmit : action}
      className={
        disable
          ? `
          w-full bg-green-main py-4 focus:outline-none
          text-green-sub3 font-bold text-base rounded-xl 
        `
          : ` w-full bg-green-main py-4 focus:outline-none
          text-green-sub3 font-bold text-base rounded-xl `
      }
    >
      {loading ? <CircularProgress color="white" size="20px" /> : " Log In"}
    </button>
  );
};

export const RegisterButton = ({ loading, disable, action }) => {
  return (
    <button
      onClick={disable ? avoidSubmit : action}
      className={
        disable
          ? `
          w-full bg-green-main py-4 text-green-sub3 
          font-bold text-base rounded-xl focus:outline-none
          `
          : `  w-full bg-green-main py-4 text-green-sub3 
          font-bold text-base rounded-xl focus:outline-none`
      }
    >
      {loading ? (
        <CircularProgress color="white" size="20px" />
      ) : (
        " Create Account"
      )}
    </button>
  );
};

export const UpdateButton = ({ loading, disable, action }) => {
  return (
    <button
      onClick={disable ? avoidSubmit : action}
      className={
        disable
          ? `
          max-w-md w-full py-4 rounded-lg m-auto flex items-center justify-center mt-20
          font-[Poppins] text-white bg-green-main text-base font-bold focus:outline-none 
          
          `
          : `  max-w-md w-full py-4 rounded-lg m-auto flex items-center justify-center mt-20
          font-[Poppins] text-white bg-green-main text-base font-bold focus:outline-none 
          `
      }
    >
      {loading ? (
        <CircularProgress color="white" size="20px" />
      ) : (
        " Save Changes"
      )}
    </button>
  );
};
