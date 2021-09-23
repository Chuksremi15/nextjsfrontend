import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

function Banner() {
  return (
    <div className=" container px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 11500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="
           bg-gradient-to-r from-[#00A69C] to-[#1B75BB] 
           rounded-[22px]
          lg:rounded-[28px]  relative
          "
      >
        {Array(4)
          .fill()
          .map((_, i) => (
            <SwiperSlide key={i} className="">
              <div
                className="
         flex flex-col  my-6 py-2 lg:py-8
         h-[175px] lg:h-[325px] lg:p-4    
         lg:px-16  w-full px-4 md:px-8
  
        "
              >
                <h1
                  className="
          text-white font-semibold font-[Poppins] 
          text-lg pr-20 z-10 lg:text-4xl lg:max-w-xl
          md:text-2xl md:max-w-md
          "
                >
                  Advertisement for all sorts, has to be done with graphics
                </h1>
                <img
                  className="
                  absolute bottom-0 -right-8 lg:right-0 z-0 h-[95%]
                  w-[256px] lg:w-[498px]
                   "
                  src="/bannerNurse.png"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Banner;
