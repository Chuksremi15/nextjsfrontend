import { MailIcon } from "@heroicons/react/outline";

function Newsletter() {
  return (
    <div className="flex flex-col max-w-screen-md m-auto w-full my-8">
      <h1
        className="
      font-[Poppins] text-[#00A69C] text-base font-medium lg:text-lg
      lg:font-bold
       w-max px-2 ml-6 lg:ml-10 -mb-3 z-10 bg-green-sub3 "
      >
        Our Newsletter
      </h1>
      <form
        className="
      max-w-screen-md border border-[#BDBDBD]
      rounded-xl w-full px-2 py-2
      flex items-center justify-between 
       "
      >
        <MailIcon className="h-8 text-[#BDBDBD]  mr-3" />
        <input
          type="text"
          className="
          flex-grow focus:outline-none w-24
          bg-transparent-main lg:text-lg text-green-black
          lg:font-semibold text-base font-medium
          "
          placeholder="Email Address"
        />
        <button
          className="
          bg-green-main lg:px-16 lg:py-4 rounded-md
          text-green-sub3 px-4 py-2 text-sm lg:rounded-lg
        lg:text-lg  font-bold font-[Poppins] ml-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
