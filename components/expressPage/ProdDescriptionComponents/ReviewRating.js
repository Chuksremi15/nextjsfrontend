import { StarIcon } from "@heroicons/react/solid";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { useInventNavState } from "../../../store";
import BigBtn from "../../generalComponents.js/BigBtn";

const RateBar = ({ star, rate }) => (
  <div className="flex items-center px-2">
    <p
      className="
            text-base font-[Poppins] font-bold text-gray-main mr-2"
    >
      {star}
    </p>
    <StarIcon className="text-[#F2994A] h-5 mr-6" />
    <Progress
      percent={rate}
      strokeWidth={1}
      theme={{
        active: {
          color: "#00A69C",
        },
      }}
    />
  </div>
);

const Ratings = [
  {
    star: 5,
    rate: 67,
  },
  {
    star: 4,
    rate: 16,
  },
  {
    star: 3,
    rate: 7,
  },
  {
    star: 2,
    rate: 4,
  },
  {
    star: 1,
    rate: 2,
  },
];

function ReviewRating({ data }) {
  const { setOpenInventNav } = useInventNavState();
  return (
    <div className="lg:w-[35%] w-full">
      <h1
        className="
             text-xl font-[Poppins] mb-4
                font-bold text-green-black
            "
      >
        Rating & Reviews
      </h1>

      <div className="flex w-full divide-x-2 divide-gray-200 ">
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <h1
              className="
             text-4xl font-[Poppins] mr-4
                font-bold text-green-black
            "
            >
              {data.rating}
            </h1>

            <StarIcon className="text-[#F2994A] h-8" />
          </div>
          {/* <p
            className="
            text-sm font-[Poppins] font-medium text-gray-main"
          >
            934 Ratings
          </p>
          <p
            className="
            text-sm font-[Poppins] font-medium text-gray-main"
          >
            and 257 Reviews
          </p> */}
        </div>
        <div className="w-1/2">
          <RateBar rate={data.rating} />
        </div>
      </div>

      <BigBtn
        onClick={() => setOpenInventNav(true)}
        className="mt-8"
        text="Go to Cart"
      />
    </div>
  );
}

export default ReviewRating;
