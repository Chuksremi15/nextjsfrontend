import Avatar from "./Avatar";

function UserLog({ className }) {
  return (
    <div
      className={`
    col-span-2 row-span-2 sm:col-span-1
    rounded-lg bg-blue-main px-2 py-3
    flex space-x-3 lg:space-x-4 ${className}
    `}
    >
      <Avatar src="/designer.jpg" />
      <div className="flex flex-col space-y-2">
        <h1
          className="
        text-white font-[DM Sans] 
        text-lg font-semibold
        "
        >
          Hey Emma,
        </h1>
        <p
          className="
        text-[#82BEED] font-[DM Sans] 
        text-sm font-medium"
        >
          Complete your profile and let’s get to know how to serve your medical
          needs.
        </p>
      </div>
    </div>
  );
}

export default UserLog;
