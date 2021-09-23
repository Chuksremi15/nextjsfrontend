import ProfileInfo from "../../expressPage/settingsPage/ProfileInfo";
import BussinessForm from "./BussinessForm";

function EditProfile() {
  return (
    <div className="container px-4">
      <ProfileInfo
        userText=" Business ID"
        id="543dfdsfe3r"
        imgSrc="/designer.jpg"
        btnText="Update Logo"
      />
      <BussinessForm />
    </div>
  );
}

export default EditProfile;
