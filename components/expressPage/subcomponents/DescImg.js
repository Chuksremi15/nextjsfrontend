import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function DescImg({ data }) {
  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      loop
      className="
          flex flex-col items-center justify-center bg-gray-100
         rounded-xl p-8 mb-6 relative shadow-md
          "
    >
      {data.fill().map((_, i) => (
        <SwiperSlide key={i} className="flex justify-center  ">
          <Image
            className=" "
            objectFit="contain"
            src="/codine.png"
            height={300}
            width={200}
          />
        </SwiperSlide>
      ))}
      <img
        src="/brandLogo.png"
        alt=""
        className="h-14 absolute bottom-3 right-3"
      />
    </Swiper>
  );
}

export default DescImg;
