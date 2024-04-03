import React from "react";
import { SwiperOptions } from "swiper/types";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface IDetailsCard {
  data: any;
}

const DetailsCard = ({ data }: IDetailsCard) => {

  const swiperOptions: SwiperOptions = {
    slidesPerView: "auto",

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    spaceBetween: 0,
    pagination: {
      el: ".HomeCharac-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {},
    modules: [Autoplay, Pagination, EffectFade],
  };

  const imagesLarge = data.images?.filter(
    (image: any) => image.resolution === "normal"
  );

  return (
    <div className="bg-[#252127]">
      <div className="relative">
        <Swiper {...swiperOptions}>
          {imagesLarge?.map((img: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="Details-slider-image">
                <Image
                  src={img.path}
                  alt=""
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`HomeCharac-pagination`}></div>
      </div>
    </div>
  );
};

export default DetailsCard;
