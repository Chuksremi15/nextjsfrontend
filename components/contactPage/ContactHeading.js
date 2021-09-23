function ContactHeading() {
  const CallBtn = ({ title }) => (
    <button
      className="
       lg:px-16 py-2 bg-green-main text-xl 
       px-10   font-semibold rounded-lg text-green-sub3 
          cursor-pointer focus:outline-none
    "
    >
      {title}
    </button>
  );

  return (
    <div className="w-full max-w-screen-xl flex flex-col py-6 m-auto mb-4 ">
      <h1
        className="
      px-6 mb-8 text-[#001F1D] font-bold text-xl 
      lg:text-3xl font-[Poppins]"
      >
        Contact Us
      </h1>
      <div
        className="
            bg-cover bg-center bg-contact-bg
         w-full   bg-no-repeat  
        "
      >
        <div
          className="
        justify-center bg-gray-700 w-full flex flex-col px-6 py-8
        bg-opacity-60 md:py-10 md:px-8 lg:py-12 xl:py-20
        "
        >
          <h1
            className="
          font-[Poppins] text-lg text-white font-bold mb-12 
          text-center md:text-xl xl:text-3xl"
          >
            Reach out to us, we’d love to hear from you
          </h1>
          <div className="max-w-md w-full flex justify-evenly m-auto">
            <CallBtn title="call" />
            <CallBtn title="visit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeading;
