import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide from "@/json/slide.json";
import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Container } from "../globals/Container";

const HomeBusiness = () => {
  const swiperOptions: SwiperOptions = {
    slidesPerView: "auto",
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

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,

      },
      530: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    },
    modules: [Pagination, Autoplay, Navigation],
  };

  return (
    <div className="container-general hidden">
      <section className="" >
        <h2 className="homeBusiness_h2 mba-5">Sibaritta Business </h2>
        <article className="homeBusiness_carrusel">
          <div className="homeBusiness_carrusel_card relative">
            <Swiper {...swiperOptions}>
              {slide.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="homeBusiness_carrusel_card_conten">
                    <Image
                      src={card?.imgs}
                      alt="icono"
                      width={200}
                      height={99}
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
        </article>
      </section>
    </div>
  );
};

export default HomeBusiness;
