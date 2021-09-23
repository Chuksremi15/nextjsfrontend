import ProductCard from "./subcomponents/ProductCard";
import { useRouter } from "next/router";
import { shuffle } from "../../services/method.service";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { getCatProductsRequest } from "../../redux/actions";

function ProductSlide({
  title,
  discount,
  recent,
  portal,
  productLoading,
  products,
  loading,
}) {
  const router = useRouter();

  //this method shuffles products array
  let shuffledProducts = shuffle(products);

  let newProduct = shuffledProducts.filter((product) => {
    return product.category == "drugs";
  });

  const enterProduct = () => {
    router.push(`/${portal ? "portal" : "express"}/shop/${title} `);
  };

  return (
    <div
      className="
        flex flex-col max-w-screen-xl w-full
        mx-auto px-6 py-4
        "
    >
      <div
        className="
      flex justify-between items-center mb-8
      lg:mb-10
      "
      >
        <h1
          className="
            text-lg text-green-black font-bold
             font-[Poppins] relative
            "
        >
          {title}
          {recent && (
            <span
              className="
          absolute top-0 -right-8 md:-right-10 font-[Poppins]
          text-red-main text-xs lg:text-sm font-semibold
          "
            >
              New
            </span>
          )}
        </h1>

        <p
          className="
         text-sm lg:text-base text-blue-main font-semibold
             font-[Poppins] cursor-pointer 
        "
          onClick={enterProduct}
        >
          see all
        </p>
      </div>

      <div
        className="
        grid gap-4 gap-y-6
        grid-cols-2 sm:grid-cols-3 
        lg:grid-cols-6 md:grid-cols-4
        "
      >
        {newProduct.slice(0, 6).map((data, i) => (
          <ProductCard
            key={i}
            id={data._id}
            data={data}
            src={data.image && data.image[0]}
            discountPrice={"$345"}
            percentDiscount={"10%"}
            discount={discount}
            grid
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSlide;
