import Image from "next/image";
import React from "react";

const CardPartnerExperiencias = ({ data, addSuggestion }: any) => {
  return (
    <div className="CardPartnerExperiencias">
      <div className="card-partner-experiencias-images z-[10]">
        {/* <div className="card-partner-experiencias-image-1">
          <Image
            className="card-partner-experiencias-image-2-image"
            src="/partners/lapiz.png"
            width={1000}
            height={1000}
            alt=""
          />
        </div> */}
        {/* <div className="card-partner-experiencias-image-2">
          <Image
            className="card-partner-experiencias-image-2-image"
            src="/partners/tachoDeBasura.png"
            width={1000}
            height={1000}
            alt=""
          />
        </div> */}
      </div>
      <div className="card-partner-experiencias-text z-[10]">
        <div className="card-partner-experiencias-text-1">
          <h4 className="font-extrabold ">{data.name}</h4>
          <h4 className="card-partner-experiencias-text-2">
            ${data.regular_price}
          </h4>
        </div>
        <p className="card-partner-experiencias-text-1-2">{data.description}</p>
        <button
          className="card-partner-experiencias-button z-[10]"
          onClick={() => addSuggestion(data.id)}
        >
          Agregame
        </button>
      </div>

      <div className="w-full h-full z-0 rounded-[1rem] absolute  bottom-0 bg-gradient-to-b from-transparent to-[#47304C] "></div>
    </div>
  );
};

export default CardPartnerExperiencias;
