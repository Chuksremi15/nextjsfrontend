import UploadForm from "./UploadForm";

function UploadPage() {
  return (
    <div className="container">
      <h1
        className="
            text-2xl text-green-black font-bold
             font-[Poppins] mb-10
            "
      >
        Upload a Product
      </h1>
      <UploadForm />
    </div>
  );
}

export default UploadPage;
