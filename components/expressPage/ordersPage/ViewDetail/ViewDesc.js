import Image from "next/image";

function ViewDesc() {
  const ProfileInfo = ({ title, desc }) => (
    <h1
      className="
           text-xs font-[Poppins] 
           font-medium text-gray-main
          "
    >
      {title}{" "}
      <span
        className="
            text-sm font-[Poppins] 
            font-bold text-green-black
            "
      >
        {desc}
      </span>
    </h1>
  );
  return (
    <div
      className="
  flex items-center justify-between
  border-b-2 border-gray-200 py-4 
  my-4
  "
    >
      <div className="flex items-center">
        <div
          className="
        bg-gray-100 p-1
         rounded-lg mr-4 
         "
        >
          <Image height={60} width={60} src="/codine.png" alt="" />
        </div>
        <div className="">
          <ProfileInfo title="Name:" desc="Piriton Syrups" />
          <ProfileInfo title="Type:" desc="500mg Bottle" />
          <ProfileInfo title="Quantity:" desc=" x2" />
          <ProfileInfo title="Price:" desc="₦5,900" />
        </div>
      </div>
      <div className="">
        <p
          className="
         text-base font-[Poppins] 
           font-medium text-[#828282]
        "
        >
          Grand Total
        </p>
        <h1
          className="
        text-lg lg:text-xl font-[Poppins] 
            font-bold text-green-black
        "
        >
          ₦5,900
        </h1>
      </div>
    </div>
  );
}

export default ViewDesc;
