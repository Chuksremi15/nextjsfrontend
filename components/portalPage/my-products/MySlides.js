import MyCard from "./MyCard";

function MySlides() {
  return (
    <div className="container grid gap-4">
      <h1
        className="
            text-lg text-green-black font-bold
             font-[Poppins] relative
            "
      >
        My Products
      </h1>
      <div
        className="
        max-w-screen-lg m-auto w-full
        grid gap-4 lg:gap-6 md:grid-cols-2 
        lg:grid-cols-4
        "
      >
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </div>
  );
}

export default MySlides;
