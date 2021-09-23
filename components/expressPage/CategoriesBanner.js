import CatCard from "./subcomponents/CatCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { useCategoriesState } from "../../store/product.store";

SwiperCore.use([Autoplay]);

function CategoriesBanner({ loading, categories }) {
  function shuffle(array) {
    const sortedArray = array.sort(() => Math.random() - 0.5);
    return sortedArray;
  }

  const shuffledCategories = shuffle(categories);

  //function that splits categories array into two halfs
  const splitCategories = (arr) => {
    const half = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(half);

    return [firstHalf, secondHalf];
  };

  const [firstHalf, secondHalf] = splitCategories(shuffledCategories);

  return (
    <div
      className="
        flex flex-col max-w-screen-xl 
        w-full m-auto px-4 py-4
        "
    >
      <h1
        className="
            text-lg text-green-black font-bold
            mb-6  font-[Poppins]
            "
      >
        Top Catergories
      </h1>
      <div
        className="
      grid gap-4 overflow-hidden
      "
      >
        <div className="max-w-screen-xl">
          <Swiper
            spaceBetween={2}
            slidesPerView={4}
            centeredSlides={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            className="
          w-full
          "
          >
            {!loading &&
              firstHalf?.slice(0, 16).map((data, i) => {
                return (
                  <SwiperSlide key={i} className="">
                    <CatCard data={data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="max-w-screen-xl">
          <Swiper
            spaceBetween={2}
            slidesPerView={4}
            centeredSlides={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            className="
          w-full
          "
          >
            {!loading &&
              secondHalf?.slice(0, 16).map((data, i) => (
                <SwiperSlide key={i} className="">
                  <CatCard data={data} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CategoriesBanner;
