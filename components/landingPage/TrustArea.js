import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay]);

function TrustArea() {
  return (
    <div
      className="
    hidden md:grid gap-4 py-2 px-6 
     max-w-screen-xl w-full m-auto bg-[#FAFAFA]
    "
    >
      <h2 className="font-Poppins text-base font-semibold text-[#BDBDBD]">
        Trusted By
      </h2>
      <Swiper
        spaceBetween={5}
        slidesPerView={7}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        className="
            overflow-hidden w-full
          "
      >
        {Array(16)
          .fill()
          .map((_, i) => (
            <SwiperSlide key={i} className="">
              <Image
                src="/slideimg1.svg"
                alt=""
                className="mr-4 flex-shrink-0"
                height={65}
                width={150}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default TrustArea;
