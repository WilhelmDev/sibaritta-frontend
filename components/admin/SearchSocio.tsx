import Image from "next/image";
import React, { useEffect, useState } from "react";

function SearchSocio({ infoData, select, setpartId }: any) {
  const [socio, setsocio] = useState("");
  const [search, setsearch] = useState(false);
  const [selectedSocio, setSelectedSocio] = useState("");
  const [fotos, setFotos] = useState("");

  const captuSear = (e: any) => {
    setsocio(e.target.value);
  };

  const handleSocioClick = (name: any, ft: any, id: number) => {
    setpartId(id);
    setSelectedSocio(name);
    setFotos(ft);
    setsocio("");
    setsearch(false);
  };

  const filterSocio = infoData?.filter((d: any) =>
    d.names?.toLowerCase().includes(socio.toLowerCase())
  );

  useEffect(() => {
    if (infoData && infoData.length > 0) {
      setSelectedSocio(infoData[0]?.names);
      setFotos(infoData[0]?.photo);
    }
  }, [infoData]);

  return (
    <div className="box_content_search_socio">
      <div className="box_content_name_socio">
        <h5>{select}</h5>
        <span>{selectedSocio}</span>
      </div>
      <div className="box_content_image_socio">
        <Image
          alt=""
          src={fotos || "/img/person.png"}
          width={1000}
          height={1000}
          className="w-full h-full object-cover "
        />
      </div>
      <div
        onClick={() => setsearch(!search)}
        className="box_content_search_triangulo"
      ></div>
      {search && (
        <div className={`box_search_data main-page`}>
          <input onChange={captuSear} type="text" placeholder="Buscar..." />
          <div className="data_search_box_admin_socio">
            {filterSocio?.map((x: any) => (
              <h3
                onClick={() => handleSocioClick(x.names, x.photo, x.id)}
                key={x.id}
              >
                {x.names}
              </h3>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSocio;
