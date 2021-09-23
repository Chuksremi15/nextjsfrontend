import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

function CustomDrop({
  selectChoice,
  setSelectChoice,
  selectOptions,
  desc,
  className,
}) {
  const [anchor, setAnchor] = useState(false);
  const handleClick = () => {
    setAnchor(!anchor);
  };

  const handleClickAway = () => {
    setAnchor(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={` ${
          desc ? "w-full" : "lg:w-80 w-60"
        } ${className}  relative`}
      >
        <div
          onClick={handleClick}
          className="
        bg-white rounded-lg shadow-lg 
        border border-gray-200 px-2 lg:px-4 py-2 
        flex items-center justify-between cursor-pointer
        "
        >
          <h1
            className="
          font-semibold text-green-black  
          text-sm lg:text-base font-[DM Sans]
          "
          >
            {selectChoice}
          </h1>
          <ChevronDownIcon className="h-6 p-1 rounded-full cursor-pointer" />
        </div>

        {anchor && (
          <div className="">
            <ul
              className="
          border-2 border-gray-main p-2 bg-white
          space-y-1 w-full absolute  rounded-lg shadow-lg z-20
          "
            >
              {selectOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelectChoice(option);
                    setAnchor(false);
                  }}
                  className="font-semibold text-gray-main
                  text-base font-[DM Sans]list-none cursor-pointer
           "
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default CustomDrop;
