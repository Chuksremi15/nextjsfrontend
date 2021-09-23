import { ShieldExclamationIcon } from "@heroicons/react/outline";

function ErrorMessage({ message }) {
  return (
    <div
      className="
          flex items-center text-red-700 text-sm 
          text-[DM Sans] font-light mt-1 ml-2 
          "
    >
      <ShieldExclamationIcon className="mr-2 h-4" />
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
