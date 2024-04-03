import Image from "next/image";
import React from "react";
interface ICardDetails {
  ima: string;
  handleCardClick: (image: string) => void;
}
const CardDetails = ({ ima, handleCardClick }: ICardDetails) => {
  return (
    <div className="CardDetails" onClick={() => handleCardClick(ima)}>
      <div className="CardDetails-image"
       style={{ backgroundImage: `url(${ima})`,
      backgroundPosition: "center",
    backgroundSize: "cover"}}
      >
        {/* <Image
          src={ima}
          alt=""
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        /> */}
      </div>
    </div>
  );
};

export default CardDetails;
