function BrandCard() {
  return (
    <div
      className="
        flex flex-col items-center flex-shrink-0
        space-y-4

        "
    >
      <img
        src="/brandRogo.svg"
        alt=""
        className="
        h-32 w-32 rounded-full shadow-xl
          "
      />
      <h1
        className="
          font-semibold text-lg text[DM Sans] text-green-black
          text-center w-20
          "
      >
        Himalaya
      </h1>
    </div>
  );
}

export default BrandCard;
