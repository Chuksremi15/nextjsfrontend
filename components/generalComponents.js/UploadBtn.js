import Button from "./Button";
import { PlusIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function UploadBtn() {
  const router = useRouter();

  const handleUploadBtnClick = () => {
    router.push(`/portal/shop/uploadProduct`);
  };
  return (
    <div className="flex justify-end container">
      <Button
        className="text-white bg-green-main"
        text="Upload Product"
        Icon={PlusIcon}
        IconClass="text-white"
        onClick={handleUploadBtnClick}
      />
    </div>
  );
}

export default UploadBtn;
