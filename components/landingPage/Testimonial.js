import Avatar from "./SubComponents/Avatar";
import Blockquote from "./SubComponents/Blockquote";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { useState } from "react";
import dataOnLandingPage from "../../contents/onLandingPage";

SwiperCore.use([Autoplay]);

function Testimonial() {
  const testimonialData = dataOnLandingPage.testimonialData;
  const [speach, setSpeaker] = useState(testimonialData[0].speaker);

  return (
    <div
      className="
        flex flex-col px-6 py-8 items-center
    max-w-screen-xl w-full m-auto bg-[#D2EFED]
        "
    >
      <h1
        className="
      font-[Poppins] font-bold text-xl 
      mb-10 max-w-xl lg:text-2xl text-[#001F1D]
      "
      >
        Testimonials
      </h1>

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        onSlideChange={({ realIndex }) =>
          setSpeaker(testimonialData[realIndex].speaker)
        }
        className="
          w-full mb-4 overflow-visible
          "
      >
        {testimonialData.map(({ text, id }) => (
          <SwiperSlide
            key={id}
            className=" flex justify-center overflow-visible"
          >
            <Blockquote text={text} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="
      flex items-center justify-center 
      space-x-4 max-w-lg w-full
      "
      >
        <Avatar url={speach.url} />
        <div className="flex flex-col font-[#001F1D] font-[DM Sans] ">
          <h1 className=" font-semibold text-lg">{speach.name}</h1>
          <h1 className="font-normal text-sm">{speach.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
