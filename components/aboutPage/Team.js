import TeamCard from "./subComponents/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import onAboutPageData from "../../contents/onAboutPage";

SwiperCore.use([Autoplay]);

function Team() {
  return (
    <div
      className="
      w-full max-w-screen-xl flex flex-col m-auto overflow-hidden
      px-6 items-center py-8 lg:py-12 mb-6 lg:mb-12 
      "
    >
      <h1
        className="
      mb-6 text-[#001F1D] font-bold text-2xl 
      lg:text-3xl font-[Poppins]
      "
      >
        Meet out Team
      </h1>
      <div className="">
        <div className="max-w-screen-xl w-full px-8">
          <Swiper
            spaceBetween={2}
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
              delay: 4050,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={false}
            className="
              w-full flex items-center
              "
          >
            {onAboutPageData.ourTeamData.map(({ name, img, title }, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <TeamCard src={img} name={name} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Team;
