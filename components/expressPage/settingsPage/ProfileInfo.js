import Avatar from "../../generalComponents.js/Avatar";
import Button from "../../generalComponents.js/Button";

function ProfileInfo({ userText, btnText, imgSrc, id }) {
  return (
    <div className="flex items-center justify-end mb-4">
      <h1
        className="
          text-gray-main bg-gray-200 px-2 py-1 rounded-md
          font-[DM Sans] font-medium text-xs md:text-sm mr-4 md:mr-8
          "
      >
        {userText}: {id}
      </h1>
      <div className="flex items-center space-x-2 md:space-x-6">
        <Avatar src={imgSrc} className="transform scale-125 lg:scale-150" />
        <Button
          className="text-green-main bg-[white] 
          border  border-green-main"
          text={btnText}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
