import Popover from "@material-ui/core/Popover";
import { useState } from "react";
import HoverCat from "./subcomponents/HoverCat";
import Icon from "react-eva-icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import MobileCat from "./subcomponents/MobileCat";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { usePortalPageState } from "../../store";
import { useCategoriesState } from "../../store/product.store";
import { shuffle } from "../../services/method.service";

SwiperCore.use([Autoplay]);

function NavCat({ loading, categories }) {
  const [popNav, setPopNav] = useState(null);
  const [mobileCat, setMobileCat] = useState(false);
  const { onPortal } = usePortalPageState();

  const shuffledCategories = shuffle(categories);

  const handlePopoverOpen = (event) => {
    setPopNav(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopNav(null);
  };

  const open = Boolean(popNav);
  const id = popNav ? "simple-popover" : undefined;

  return (
    <div
      className="
    max-w-screen-xl w-full mx-auto 
    px-4 mt-4 bg-white rounded-xl 
    py-4 lg:py-6 flex flex-col
    "
    >
      <div
        aria-owns={id}
        aria-haspopup="true"
        className="
        flex  px-2 items-center
         lg:px-4  
        
       "
      >
        <div
          className="
           flex items-center 
           overflow-hidden
           text-green-main
           "
        >
          <div
            onMouseEnter={handlePopoverOpen}
            onClick={() => setMobileCat(!mobileCat)}
            className="
            flex items-center cursor-pointer mr-4 lg:mr-8"
          >
            <h1
              className="
                text-base font-normal mr-2 font-[Poppins] 
                whitespace-nowrap cursor-pointer
                "
            >
              All Categories
            </h1>
            <ChevronDownIcon className="h-6 text-green-main lg:hidden" />
            <div className="hidden lg:flex items-center">
              <Icon
                name="keypad"
                fill="#00A69C"
                size="medium" // small, medium, large, xlarge
              />
            </div>
          </div>
          <div
            className="
        max-w-screen-xl
         "
          >
            <Swiper
              spaceBetween={2}
              slidesPerView={12}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              freeMode={true}
              className="
           w-full
          "
            >
              {!loading &&
                shuffledCategories?.map(({ name }, i) => (
                  <SwiperSlide key={i} className="flex pr-0">
                    <Link
                      href={`/${
                        onPortal ? "portal" : "express"
                      }/shop/${name.toLowerCase()}`}
                    >
                      <h1
                        key={i}
                        className="
            text-base font-normal font-[Poppins] 
            text-gray-400 cursor-pointer
            "
                      >
                        {name}
                      </h1>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <Popover
          id={id}
          open={open}
          anchorEl={popNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          className="mt-8 hidden md:inline"
        >
          <div onMouseLeave={handlePopoverClose} className=" overflow-hidden">
            <HoverCat categories={categories} />
          </div>
        </Popover>
      </div>

      <div>{mobileCat && <MobileCat />}</div>
    </div>
  );
}

export default NavCat;
