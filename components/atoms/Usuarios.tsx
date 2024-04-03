import Image from "next/image";
import React, { useState } from "react";

interface IUsuarios {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

function Usuarios({ setCount, count }: IUsuarios) {
  const [Users, setUsers] = useState<boolean>(false);

  return (
    <>
      <section className="gastronomy-input relative ">
        <div
          className="w-full h-full flex justify-center items-center font-lato"
          onClick={() => setUsers(!Users)}
        >
          <span className="text-[#E1D4C4] font-lato font-semibold">
            {" "}
            # de personas
          </span>
        </div>
        <div className="container-users absolute left-[8rem] top-[.5rem] laptop:top-[.5rem] laptop:left-[.5rem] ">
          {Users && (
            <article className="users-input main-page">
              <div className="users-input-img">
                <Image src={"/Users.png"} alt="xd" width={40} height={40} />
              </div>

              <div className="users-input-btns">
                <div
                  onClick={() => setCount(count - 1)}
                  className="users-input-btns-btn"
                >
                  {" "}
                  -{" "}
                </div>
                <h2 className="users-input-btns-number">{count}</h2>
                <div
                  onClick={() => setCount(count + 1)}
                  className="users-input-btns-btn bg-[#F89C53] text-white"
                >
                  {" "}
                  +{" "}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}

export default Usuarios;
