import AdvertCard from "./subcomponents/AdvertCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

function AdvertBanner() {
  return (
    <div
      className="
         grid max-w-screen-xl w-full px-2 py-4 m-auto
         md:grid-cols-2 gap-4
         "
    >
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 22500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full"
      >
        {Array(2)
          .fill()
          .map((_, i) => (
            <SwiperSlide key={i} className="">
              <AdvertCard />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 22500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full hidden md:inline"
      >
        {Array(2)
          .fill()
          .map((_, i) => (
            <SwiperSlide key={i} className="">
              <AdvertCard />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default AdvertBanner;
