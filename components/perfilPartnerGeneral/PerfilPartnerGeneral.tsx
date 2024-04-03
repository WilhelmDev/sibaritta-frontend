import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dropzone from "react-dropzone";
import Camera from "@/components/ui/icons/Camera";
import { onInputNumberOnly } from "@/lib/formUtils";
import { emailPattern } from "@/lib/formUtils";
import SearchSocio from "@/components/admin/SearchSocio";

interface perfilPartnerGeneral {
  dataProps: any;
}

const PerfilPartnerGeneral = ({ dataProps }: perfilPartnerGeneral) => {
  const [type_user, settype_user] = useState<number>();
  const [pathname, setpathname] = useState<string>();
  const [error, setError] = useState("");

 

  useEffect(() => {
    settype_user(dataProps.type_user);
    setpathname(dataProps.pathname);
  }, [dataProps.type_user, dataProps.pathname]);

  return (
    <>
      {type_user === 2 ? (
        <div className="perfil-partner-box--general-container">
          <div className="perfil-partner-box--  main-page relative">
            <form
              onSubmit={dataProps?.handleSubmit(dataProps?.updatePerfilPartner)}
              className="box-perfil-partner-box-partner"
            >
              <div className="--perfil-partner-  relative ">
                <div
                  className={` h-full flex justify-center items-center w-full border-[#A99E92] border overflow-hidden rounded-full laptop:rounded-none   `}
                >
                  {!dataProps.imageFile ? (
                    <Image
                      alt=""
                      src={
                        dataProps?.infoData?.avatar || "/admin/TT Sibaritta.jpg"
                      }
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      alt=""
                      src={
                        dataProps.imageFile
                          ? URL.createObjectURL(dataProps?.imageFile)
                          : "/admin/TT Sibaritta.jpg"
                      }
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="w-full h-full flex justify-center items-center">
                    <Dropzone onDrop={dataProps.handleDrop}>
                      {({ getRootProps, getInputProps }) => (
                        <div className="w-full h-full " {...getRootProps()}>
                          <input
                            {...getInputProps()}
                            className="w-full h-full "
                          />
                          <div className="iconsPartnet ">
                            <div className="w-[2rem] h-[2rem] cursor-pointer  ">
                              <Camera />
                            </div>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </div>
                </div>
              </div>
              <div className="perfil-partner-datos-">
                <div className="--datos-partners">
                  <div className="perfil-partner-title-restaurant">
                    <h2>Perfil</h2>
                    <p>{dataProps?.infoData?.partner?.comercial_name}</p>
                    <p>{dataProps?.infoData?.partner?.rfc}</p>
                  </div>
                  <div className="perfil-partner-inputs">
                    <div className="perfil-input-name-phone">
                      <div className="w-full relative">
                        <input
                          type="text"
                          {...dataProps.register("responsable_name")}
                          placeholder="Nombre del Responsable"
                          className={`  ${
                            dataProps.isEditing["responsable_name"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["responsable_name"]}
                        />
                        <i
                          onClick={() =>
                            dataProps.toggleEditing("responsable_name")
                          }
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>

                      <div className="w-full relative">
                        <input
                          type="text"
                          placeholder="celular"
                          {...dataProps.register("phone1")}
                          className={`${
                            dataProps.isEditing["celular"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          maxLength={15}
                          onInput={(e) => {
                            onInputNumberOnly(dataProps.setValue, "phone", e);
                          }}
                          readOnly={!dataProps.isEditing["celular"]}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("celular")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea
                        {...dataProps.register("description")}
                        cols={30}
                        rows={10}
                        placeholder="Description de restaurante"
                        className={` laptop:!py-[1.5rem] ${
                          dataProps.isEditing["area"] &&
                          "!bg-[#4D3452] duration-300 ease-in-out"
                        }`}
                        readOnly={!dataProps.isEditing["area"]}
                      ></textarea>
                      <i
                        onClick={() => dataProps.toggleEditing("area")}
                        className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.5rem] absolute top-[4.5rem] right-[1.5rem] laptop:top-[1.5rem]"
                      ></i>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Correo electronico"
                        {...dataProps.register("business_email", {
                          required: "Este campo es obligatorio",
                          pattern: {
                            value: emailPattern,
                            message: "formato incorrecto",
                          },
                        })}
                        className={`${
                          dataProps.isEditing["business_email"] &&
                          "!bg-[#4D3452] duration-300 ease-in-out"
                        }`}
                        readOnly={!dataProps.isEditing["business_email"]}
                      />
                      <i
                        onClick={() =>
                          dataProps.toggleEditing("business_email")
                        }
                        className="icon-edit icon_perfil_partners"
                      ></i>
                      {dataProps.errors?.business_email && (
                        <p className="Login-error text-red-600">
                          {String(dataProps.errors?.business_email.message)}
                        </p>
                      )}
                    </div>
                    <div className="perfil-input-button-password">
                      <div className="relative w-full  w">
                        <input
                          type="text"
                          placeholder="Curp"
                          {...dataProps.register("curp")}
                          className={`${
                            dataProps.isEditing["curp"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["curp"]}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("curp")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      {/* <button>Cambiar Contraseña</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="perfil-partner-sucursal--">
                <div className="perfil-partner-sucursal-datos">
                  <h3>Sucursal</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Direccion"
                      className={`${
                        dataProps.isEditing["direccion"] &&
                        "!bg-[#4D3452] duration-300 ease-in-out"
                      }`}
                      readOnly={!dataProps.isEditing["direccion"]}
                      {...dataProps.register("address")}
                    />
                    <i
                      onClick={() => dataProps.toggleEditing("address")}
                      className="icon-edit icon_perfil_partners"
                    ></i>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Link google maps"
                      className={`${
                        dataProps.isEditing["google"] &&
                        "!bg-[#4D3452] duration-300 ease-in-out"
                      }`}
                      readOnly={!dataProps.isEditing["google"]}
                      {...dataProps.register("link_maps")}
                    />
                    <i
                      onClick={() => dataProps.toggleEditing("link_maps")}
                      className="icon-edit icon_perfil_partners"
                    ></i>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="maps"
                      className={`${
                        dataProps.isEditing["maps"] &&
                        "!bg-[#4D3452] duration-300 ease-in-out"
                      }`}
                      readOnly={!dataProps.isEditing["maps"]}
                      {...dataProps?.register("maps")}
                    />
                    <i
                      onClick={() => dataProps.toggleEditing("maps")}
                      className="icon-edit icon_perfil_partners"
                    ></i>
                  </div>
                  <div className="perfil-partner-sucursal-comision">
                    <h2>Comisión Sibaritta</h2>
                    <input
                      type="text"
                      readOnly
                      className="cursor-not-allowed"
                      {...dataProps.register("commission", {
                        required: true,
                        pattern: {
                          value: /^[0-9.]+$/,
                          message: "Por favor ingrese solo números o punto.",
                        },
                      })}
                    />
                    <div className="perfil-input-button-password w-full  flex">
                      <button className="profile-buttons">Actualizar</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {type_user === 3 && pathname === "/admin/perfil_partners" ? (
        <div className="container-home-all">
          <div className=" ">
            <div className="perfil-partner-box--general-container">
              <div className="perfil-partner-box--  main-page relative">
                <form
                  onSubmit={dataProps.handleSubmit(dataProps.createPartners)}
                  className="box-perfil-partner-box-partner"
                >
                  <div className="--perfil-partner-  relative ">
                    <div
                      className={` h-full flex justify-center items-center w-full border-[#A99E92] border overflow-hidden rounded-full laptop:rounded-none   `}
                    >
                      
                         
                         
                      
                      {!dataProps.imageFile  ? (
                        <Image
                          alt=""
                          src={dataProps.infoData?.avatar || "/img/person.png"}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          alt=""
                          src={
                            dataProps.imageFile
                              ? URL.createObjectURL(dataProps.imageFile)
                              : ""
                          }
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className="perfil-partner-datos-">
                    <div className="--datos-partners">
                      <div className="perfil-partner-title-restaurant">
                        <h2>Perfil</h2>
                      </div>
                      <div className="perfil-partner-inputs">
                        <div className="relative">
                          <input
                            type="text"
                            {...dataProps.register("full_name", {
                              required: "Este campo es obligatorio",
                            })}
                            placeholder="Nombre del restaurante"
                            className={`  ${
                              dataProps.isEditing["responsible"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["responsible"]}
                          />
                          <i
                            onClick={() =>
                              dataProps.toggleEditing("responsible")
                            }
                            className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.5rem] absolute top-[4.5rem] right-[1.5rem] laptop:top-[1.5rem]"
                          ></i>
                          {dataProps.errors?.full_name && (
                            <p className="Login-error text-red-600 text-[1rem]">
                              {String(dataProps.errors?.full_name.message)}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            {...dataProps.register("rfc", {
                            })}
                            placeholder="RFC"
                            className={`${
                              dataProps.isEditing["RFC"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["RFC"]}
                          />
                          <i
                            onClick={() => dataProps.toggleEditing("RFC")}
                            className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.5rem] absolute top-[4.5rem] right-[1.5rem] laptop:top-[1.5rem]"
                          ></i>
                          {dataProps.errors?.rfc && (
                            <p className="Login-error text-red-600 text-[1rem]">
                              {String(dataProps.errors?.rfc.message)}
                            </p>
                          )}
                        </div>
                        <div className="perfil-input-name-phone">
                          <div className="w-full relative">
                            <input
                              type="text"
                              {...dataProps.register("responsable_name", {
                                required: "Este campo es obligatorio",
                              })}
                              placeholder="Nombre del Responsable"
                              className={`  ${
                                dataProps.isEditing["responsable_name"] &&
                                "!bg-[#4D3452] duration-300 ease-in-out"
                              }`}
                              readOnly={
                                !dataProps.isEditing["responsable_name"]
                              }
                            />
                            <i
                              onClick={() =>
                                dataProps.toggleEditing("responsable_name")
                              }
                              className="icon-edit icon_perfil_partners"
                            ></i>
                            {dataProps.errors?.responsable_name && (
                              <p className="Login-error text-red-600 text-[1rem]">
                                {String(
                                  dataProps.errors?.responsable_name.message
                                )}
                              </p>
                            )}
                          </div>

                          <div className="w-full relative">
                            <input
                              type="text"
                              placeholder="celular"
                              {...dataProps.register("phone1", {
                              })}
                              className={`${
                                dataProps.isEditing["celular"] &&
                                "!bg-[#4D3452] duration-300 ease-in-out"
                              }`}
                              maxLength={15}
                              onInput={(e) => {
                                onInputNumberOnly(
                                  dataProps.setValue,
                                  "phone",
                                  e
                                );
                              }}
                              readOnly={!dataProps.isEditing["celular"]}
                            />
                            <i
                              onClick={() => dataProps.toggleEditing("celular")}
                              className="icon-edit icon_perfil_partners"
                            ></i>
                            {dataProps.errors?.phone1 && (
                              <p className="Login-error text-red-600 text-[1rem]">
                                {String(dataProps.errors?.phone1.message)}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="relative">
                          <textarea
                            {...dataProps.register("description")}
                            cols={30}
                            rows={10}
                            placeholder="Description de restaurante"
                            className={` laptop:!py-[1.5rem] ${
                              dataProps.isEditing["area"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["area"]}
                          ></textarea>
                          <i
                            onClick={() => dataProps.toggleEditing("area")}
                            className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.5rem] absolute top-[4.5rem] right-[1.5rem] laptop:top-[1.5rem]"
                          ></i>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Correo electronico"
                            {...dataProps.register("business_email", {
                              required: "Este campo es obligatorio",
                              pattern: {
                                value: emailPattern,
                                message: "formato incorrecto",
                              },
                            })}
                            className={`${
                              dataProps.isEditing["business_email"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["business_email"]}
                          />
                          <i
                            onClick={() =>
                              dataProps.toggleEditing("business_email")
                            }
                            className="icon-edit icon_perfil_partners"
                          ></i>
                          {dataProps.errors?.business_email && (
                            <p className="Login-error text-red-600 text-[1rem]">
                              {String(dataProps.errors?.business_email.message)}
                            </p>
                          )}
                        </div>
                        <div className="perfil-input-button-password">
                          <div className="relative w-full  w">
                            <input
                              type="text"
                              placeholder="Curp"
                              {...dataProps.register("curp", {
                              })}
                              className={`${
                                dataProps.isEditing["curp"] &&
                                "!bg-[#4D3452] duration-300 ease-in-out"
                              }`}
                              readOnly={!dataProps.isEditing["curp"]}
                            />
                            <i
                              onClick={() => dataProps.toggleEditing("curp")}
                              className="icon-edit icon_perfil_partners"
                            ></i>
                            {dataProps.errors?.curp && (
                              <p className="Login-error text-red-600 text-[1rem]">
                                {String(dataProps.errors?.curp.message)}
                              </p>
                            )}
                          </div>
                          <div className="  w-full  flex">
                            <button className="profile-buttons !w-full">
                              Guardar cambios
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="perfil-partner-sucursal-- pt-[0]">
                    <div className="perfil-partner-sucursal-datos">
                      <h3>Sucursal</h3>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Direccion"
                          className={`${
                            dataProps.isEditing["address"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["address"]}
                          {...dataProps.register("address")}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("address")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Link google maps"
                          className={`${
                            dataProps.isEditing["google"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["google"]}
                          {...dataProps.register("link_maps")}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("google")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="maps"
                          className={`${
                            dataProps.isEditing["maps"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["maps"]}
                          {...dataProps.register("maps")}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("maps")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      <div className="perfil-partner-sucursal-comision ">
                        <h2>Comisión Sibaritta</h2>
                        <div className="relative">
                          <input
                            type="text"
                            className={`${
                              dataProps.isEditing["commission"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["commission"]}
                            {...dataProps?.register("commission", {
                            })}
                          />
                          <i
                            onClick={() =>
                              dataProps.toggleEditing("commission")
                            }
                            className="icon-edit icon_perfil_partners"
                          ></i>
                          {dataProps.errors?.commission && (
                            <p className="Login-error text-red-600 text-[1rem]">
                              {String(dataProps.errors?.commission.message)}
                            </p>
                          )}
                        </div>
                      </div>
                      {/* <div className="  w-full  flex">
                        <div
                          onClick={dataProps.sendEmail}
                          className="profile-buttons !w-full uppercase text-[.9rem] !font-bold bg-[#F89C53] text-[#252127] flex justify-center cursor-pointer"
                        >
                          <span className="!font-bold">
                            Enviar Invitacion por correo electronico
                          </span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {type_user === 3 && pathname === "/admin/perfil_partners/select" ? (
        <div className="container-home-all">
          <div className=" ">
            <div className="perfil-partner-box--general-container">
              <div className="perfil-partner-box--  main-page relative">
                <div className="laptop:flex laptop:justify-end  laptop:mr-[10rem] ">
                  <SearchSocio
                    infoData={dataProps.dataPartne}
                    select={"PARTNER"}
                    setpartId={dataProps.setpartId}
                  />
                </div>
                <form
                  onSubmit={dataProps.handleSubmit(
                    dataProps.updatePerfilPartner
                  )}
                  className="box-perfil-partner-box-partner"
                >
                  <div className="--perfil-partner-  relative ">
                    {/* <input type="hidden" value={dataProps.infoData} /> */}
                    <div
                      className={` h-full flex justify-center items-center w-full border-[#A99E92] border overflow-hidden rounded-full laptop:rounded-none   `}
                    >
                      
                      {!dataProps.imageFile ? (
                        <Image
                          alt=""
                          src={dataProps.infoData?.avatar || "/img/person.png"}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          alt=""
                          src={
                            dataProps.imageFile
                              ? URL.createObjectURL(dataProps.imageFile)
                              : ""
                          }
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="w-full h-full flex justify-center items-center">
                        {
                          dataProps?.infoData?.fk_user_id !== null && <>
                          <Dropzone onDrop={dataProps.handleDrop}>
                          {({ getRootProps, getInputProps }) => (
                            <div className="w-full h-full " {...getRootProps()}>
                              <input
                                {...getInputProps()}
                                className="w-full h-full "
                              />
                              <div className="iconsPartnet ">
                                <div className="w-[2rem] h-[2rem] cursor-pointer  ">
                                  <Camera />
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                          </>
                        }
                        
                      </div>
                    </div>
                  </div>
                  <div className="perfil-partner-datos-">
                    <div className="--datos-partners">
                      <div className="perfil-partner-title-restaurant">
                        <h2>Perfil</h2>
                        <p>{dataProps?.infoData?.comercial_name}</p>
                        <p>{dataProps?.infoData?.rfc}</p>
                      </div>
                      <div className="perfil-partner-inputs">
                        <div className="perfil-input-name-phone">
                          <div className="w-full relative">
                            <input
                              type="text"
                              {...dataProps.register("responsable_name")}
                              placeholder="Nombre del Responsable"
                              className={`  ${
                                dataProps.isEditing["responsable_name"] &&
                                "!bg-[#4D3452] duration-300 ease-in-out"
                              }`}
                              readOnly={
                                !dataProps.isEditing["responsable_name"]
                              }
                            />
                            <i
                              onClick={() =>
                                dataProps.toggleEditing("responsable_name")
                              }
                              className="icon-edit icon_perfil_partners"
                            ></i>
                          </div>

                          <div className="w-full relative">
                            <input
                              type="text"
                              placeholder="celular"
                              {...dataProps.register("phone1")}
                              className={`${
                                dataProps.isEditing["celular"] &&
                                "!bg-[#4D3452] duration-300 ease-in-out"
                              }`}
                              maxLength={15}
                              onInput={(e) => {
                                onInputNumberOnly(
                                  dataProps.setValue,
                                  "phone",
                                  e
                                );
                              }}
                              readOnly={!dataProps.isEditing["celular"]}
                            />
                            <i
                              onClick={() => dataProps.toggleEditing("celular")}
                              className="icon-edit icon_perfil_partners"
                            ></i>
                          </div>
                        </div>
                        <div className="relative">
                          <textarea
                            {...dataProps.register("description")}
                            cols={30}
                            rows={10}
                            placeholder="Description de restaurante"
                            className={` laptop:!py-[1.5rem] ${
                              dataProps.isEditing["area"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["area"]}
                          ></textarea>
                          <i
                            onClick={() => dataProps.toggleEditing("area")}
                            className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.5rem] absolute top-[4.5rem] right-[1.5rem] laptop:top-[1.5rem]"
                          ></i>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Correo electronico"
                            {...dataProps.register("business_email", {
                              required: "Este campo es obligatorio",
                              pattern: {
                                value: emailPattern,
                                message: "formato incorrecto",
                              },
                            })}
                            className={`${
                              dataProps.isEditing["business_email"] &&
                              "!bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["business_email"]}
                          />
                          <i
                            onClick={() =>
                              dataProps.toggleEditing("business_email")
                            }
                            className="icon-edit icon_perfil_partners"
                          ></i>
                          {dataProps.errors?.business_email && (
                            <p className="Login-error text-red-600">
                              {String(dataProps.errors?.business_email.message)}
                            </p>
                          )}
                        </div>
                        <div className="perfil-input-button-password">
                          <div className="relative w-full  w">
                            <input
                              type="text"
                              placeholder="Curp"
                              {...dataProps.register("curp")}
                              className={`${
                                dataProps.isEditing["curp"] &&
                                "!bg-[#4D3452] duration-300 ease-in-out"
                              }`}
                              readOnly={!dataProps.isEditing["curp"]}
                            />
                            <i
                              onClick={() => dataProps.toggleEditing("curp")}
                              className="icon-edit icon_perfil_partners"
                            ></i>
                          </div>
                          <div className="  w-full  flex">
                            <button className="profile-buttons !w-full">
                              Guardar cambios
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="perfil-partner-sucursal--">
                    <div className="perfil-partner-sucursal-datos">
                      <h3>Sucursal</h3>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Direccion"
                          className={`${
                            dataProps.isEditing["direccion"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["direccion"]}
                          {...dataProps.register("address")}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("address")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Link google maps"
                          className={`${
                            dataProps.isEditing["google"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["google"]}
                          {...dataProps.register("link_maps")}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("link_maps")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="maps"
                          className={`${
                            dataProps.isEditing["maps"] &&
                            "!bg-[#4D3452] duration-300 ease-in-out"
                          }`}
                          readOnly={!dataProps.isEditing["maps"]}
                          {...dataProps.register("maps")}
                        />
                        <i
                          onClick={() => dataProps.toggleEditing("maps")}
                          className="icon-edit icon_perfil_partners"
                        ></i>
                      </div>
                      <div className="perfil-partner-sucursal-comision ">
                        <h2>Comisión Sibaritta</h2>
                        <div className="relative">
                          <input
                            type="text"
                            className={`${
                              dataProps.isEditing["commission"] &&
                              "bg-[#4D3452] duration-300 ease-in-out"
                            }`}
                            readOnly={!dataProps.isEditing["commission"]}
                            {...dataProps?.register("commission", {
                      
                              pattern: {
                                value: /^[0-9.]+$/,
                                message:
                                  "Por favor ingrese solo números o punto.",
                              },
                              min: {
                                value: 0,
                                message: "El valor mínimo permitido es 0",
                              },
                              max: {
                                value: 100,
                                message: "El valor máximo permitido es 100",
                              },
                            })}
                          />

                          {dataProps.errors.commission && (
                            <span className="text-[red] font-lato">
                              {dataProps.errors.commission.message}
                            </span>
                          )}

                          <i
                            onClick={() =>
                              dataProps.toggleEditing("commission")
                            }
                            className="icon-edit icon_perfil_partners"
                          ></i>
                        </div>
                      </div>
                      <div className=" w-full  flex">
                        <div
                          className="profile-buttons !w-full uppercase text-[.9rem] !font-bold bg-[#F89C53] text-[#252127] flex justify-center cursor-pointer"
                          onClick={dataProps.sendEmail}
                        >
                          <span className="!font-bold">
                            Enviar Invitacion por correo electronico
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PerfilPartnerGeneral;
