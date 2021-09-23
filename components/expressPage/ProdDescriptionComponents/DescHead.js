import Button from "../../generalComponents.js/Button";

function DescHead({ data }) {
  return (
    <div className=" mb-6 flex justify-between items-center lg:items-start ">
      <div className="flex flex-col items-start">
        <h1
          className="
                text-lg font-[Poppins] 
                font-bold text-green-black
                "
        >
          {data.name}
        </h1>
        <p
          className="
             text-sm font-[Poppins] font-medium text-gray-main
            "
        >
          by{" "}
          <span
            className="
              underline cursor-pointer
              "
          >
            {" "}
            {data.brand}{" "}
          </span>
        </p>
      </div>
      {data.controlled && (
        <Button className="text-[#EB5757] bg-[#FBDBDB] " text="Controlled" />
      )}
    </div>
  );
}

export default DescHead;
