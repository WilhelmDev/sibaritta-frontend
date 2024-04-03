import CardDetails from "@/components/molecules/details/CardDetails";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SwiperOptions } from "swiper/types";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { log } from "console";
import { IDetalle } from "@/interface/reservacion";
import { StoreIcons } from "@/components/ui/icons/StoreIcons";
import { StartIcons } from "@/components/ui/icons/StartIcons";

interface IDetailsInfo {
  data: IDetalle;
}
const DetailsCardDestok = ({ data }: any) => {
  const imagesLarge = data.images?.filter(
    (image: any) => image.resolution === "large"
  );

  const imagesview = imagesLarge?.map((image: any) => image.path);
  const [activeImage, setActiveImage] = useState(imagesview?.[0]);
  const [opacity, setOpacity] = useState(false);

  const handleCardClick = (imageSrc: string) => {
    setActiveImage(imageSrc);
    setOpacity(false);
  };

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
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1600: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    },
    modules: [Pagination, Navigation],
  };

  useEffect(() => {
    setOpacity(true);
  }, [activeImage, opacity]);
  return (
    <div className="DetailsCardDestok-container">
      <div className="DetailsCardDestok relative">
      <div className="container-logo z-[15]">
        <div
          className="DetailsCardDestok-logo"
          // style={{ backgroundImage: `url("/img/logobanner.png")` }}
        >
          <Image
            src={"/img/logobanner.png"}
            alt="activeImage"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-text-details">
          <h2>{data.name}</h2>
          <h5>
            <StoreIcons /> {data?.partner?.comercial_name}
          </h5>
          <h5>
            {data?.calification_ranking ? <StartIcons /> : ""}
            {data?.calification_ranking > 0 ? data?.calification_ranking : ""}
            {data?.calification_number !== 0 ? (
              <span>({data?.calification_number})</span>
            ) : (
              ""
            )}
          </h5>
        </div>
      </div>

      <div
        className={`DetailsCardDestok-image  ${opacity ? "isActiveess" : ""}`}
        // style={{ backgroundImage: `url(${activeImage})` }}
      >
        <Image
          src={activeImage}
          alt="activeImage"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-image-small">
        <div className="">
          <Swiper {...swiperOptions}>
            {imagesview?.map((ima: any, Index: number) => (
              <SwiperSlide key={Index}>
                <CardDetails ima={ima} handleCardClick={handleCardClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsCardDestok;
