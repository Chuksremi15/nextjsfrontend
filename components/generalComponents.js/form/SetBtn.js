import { CircularProgress } from "@material-ui/core";

function SetBtn({ className, text, loading }) {
  return (
    <button
      type="submit"
      className={`
      max-w-screen-sm w-full py-4 rounded-lg mx-auto 
      flex items-center justify-center mt-auto
      font-[Poppins] text-white bg-green-main 
      text-base font-bold focus:outline-none shadow-lg
      ${className}
      `}
    >
      {loading ? <CircularProgress color="white" size="20px" /> : text}
    </button>
  );
}

export default SetBtn;
