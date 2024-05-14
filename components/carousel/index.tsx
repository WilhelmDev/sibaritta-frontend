import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide from "@/json/slide.json";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Container } from "../globals/Container";

const Carrousel = () => {
  const swiperOptions: SwiperOptions = {
    slidesPerView: 3, // Ancho automático de los slides
    centeredSlides: true, // Centrar los slides 

    initialSlide: 2,
    navigation: {
      prevEl: `.HomeGallery-prev`,
      nextEl: `.HomeGallery-next`,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    spaceBetween: 0,

    modules: [Pagination, Autoplay, Navigation],
  };

  return (
    <div className="w-full">
      <div className="internaExperiencia__slider__card">
            <Swiper {...swiperOptions}>
              {slide.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="internaExperiencia__slider__card__imagen">
                    <Image
                      src={"/experiencia/carousel.png"}
                      alt="icono"
                      width={810}
                      height={810}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="w-full absolute flex justify-between items-center h-full top-0">
              <div className="HomeGallery-arrow  HomeGallery-prev">
                <Image
                  src={"/home/business/arrowright.svg"}
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
              <div className="HomeGallery-arrow  HomeGallery-next">
                <Image
                  src={"/home/business/arrowleft.svg"}
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
            </div>
          </div>
    </div>
  );
};

export default Carrousel;
