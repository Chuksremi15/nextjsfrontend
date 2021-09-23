import DescImg from "./subcomponents/DescImg";
import ReviewRating from "./ProdDescriptionComponents/ReviewRating";
import DescHead from "./ProdDescriptionComponents/DescHead";
import DescBody from "./ProdDescriptionComponents/DescBody";

function ProductDescription({ data }) {
  return (
    <div
      className="
        container lg:flex justify-between
        px-4
        "
    >
      <div className="w-full items-center lg:w-[60%]">
        <DescHead data={data} />
        <DescImg data={data.image} />
        <DescBody data={data} />
      </div>

      <ReviewRating data={data} />
    </div>
  );
}

export default ProductDescription;
