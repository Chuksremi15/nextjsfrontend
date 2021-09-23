import Button from "../../generalComponents.js/Button";

function ProfileDesc() {
  const ProfileInfo = ({ title, desc }) => (
    <h1
      className="
           text-sm font-[Poppins] 
           font-medium text-[#828282]
          "
    >
      {title}{" "}
      <span
        className="
            text-base font-[Poppins] 
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
    flex justify-between 
    items-center mb-10
    "
    >
      <div className="grid gap-6">
        <ProfileInfo title="Name:" desc="Emmanuel Jacob" />
        <ProfileInfo title="Email:" desc="codexpath3@gmail.com" />
        <ProfileInfo title="Phone Number:" desc="07015688584" />
      </div>
      <Button
        className="text-green-main bg-[white] 
          border  border-green-main"
        text="Update Profile Image"
      />
    </div>
  );
}

export default ProfileDesc;
