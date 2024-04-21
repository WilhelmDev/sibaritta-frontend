import React, { useEffect, useState } from "react";
import LogoImage from "@/public/ventas_sibarita/LOGO SIBARITTA.png";
import Image from "next/image";
import CardVentasSibaritta from "@/components/molecules/cards/card_ventas_sibaritta";
import CardPaymentsSibaritta from "@/components/molecules/cards/card_payments_sibaritta";
import {
  calculateDateActual,
  calculateDateWeekBefore,
  calculateDateMonthBefore,
  calculateDateYearBefore,
  calculateDateArrayCalendar,
} from "@/lib/calculateTypeDate";
import { getAllPartnerSell } from "@/services/reservationSells.service";
import { comparateDateMajorDate } from "@/lib/utils_sale_pay_sibaritta";
import { DayPicker } from "react-day-picker";
import moment from "moment-timezone";
import LogoSerata from "@/public/partner_home/LOGO_SERATTA_blanco-01-2_-sin-firma 1.png";
import SearchPartnerSalePay from "@/components/admin/SearchPartnerSalePay";
import { getAllPartnerGeneral } from "@/services/admin/admin.service";
import { useRouter } from "next/router";
import { IUser } from "@/interface/user.interface";
import { getUserById } from "@/services/login.services";
import useCurrency from "@/hook/partner/useCurrency";
import SelectionDateVentas from "@/pages/ventas_sibaritta/SelectionDateVentas";
import AdminSalesInformation from "./AdminSalesInformation";
import ElectionDatePay from "@/pages/ventas_sibaritta/ElectionDatePay";
import PaymentsInformation from "@/pages/ventas_sibaritta/PaymentsInformation";

moment().tz("America/Mexico_City");

function Index() {
  const [visibleMenu, setvisibleMenu] = useState<boolean>(false);
  const [saleOrPay, setsaleOrPay] = useState<boolean>(true);
  const [dateActual, setdateActual] = useState<string[]>([]);
  const [dateWeekBefore, setdateWeekBefore] = useState<any>("");
  const [dateMonthBefore, setdateMonthBefore] = useState<any>("");
  const [dateYearBefore, setdateYearBefore] = useState<any>("");
  const [dateComparator, setdateComparator] = useState<String>("");
  const [dataImportData, setdataImportData] = useState<any>([]);
  const [dataImportGeneral, setdataImportGeneral] = useState<any>([]);
  const [renderCards, setrenderCards] = useState([]);
  const [numberComparate, setnumberComparate] = useState<number>(1);
  const [days, setDays] = useState<any>();
  const [viewCalendar, setviewCalendar] = useState<boolean>(false);
  const [canceledOrCompleted, setcanceledOrCompleted] = useState<string>("all");
  const [dateInitial, setdateInitial] = useState<string>("");
  const [dateFinal, setdateFinal] = useState<string>("");
  const [hoy, sethoy] = useState(false);
  const [semana, setsemana] = useState(false);
  const [mes, setmes] = useState(false);
  const [año, setaño] = useState(false);
  const [infoDataClient, setinfoDataClient] = useState<any>();
  const [clientId, setClienId] = useState(0);
  const [viewSelectorPartner, setviewSelectorPartner] = useState<boolean>(true);
  const [infoData, setinfoData] = useState<IUser>();
  const [countCancelled, setCountCancelled] = useState(0)
  const [countRefounded, setCountRefounded] = useState(0)

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    user_id === "1" ? router.push("/") : "";
    user_id === "2" ? router.push("/home_partner") : "";
  };

  const { currency } = useCurrency();

  function changeSale() {
    setsaleOrPay(true);
  }
  const changePay = () => {
    setsaleOrPay(false);
  };
  const conparadorState = () => {
    sethoy(true);
    setdateComparator(dateActual[0]);
    setsemana(false);
    setmes(false);
    setaño(false);
  };

  const comparadorData = () => {
    setdateComparator(`${dateWeekBefore[0]} - ${dateActual[0]}`);
    setsemana(true);
    sethoy(false);
    setmes(false);
    setaño(false);
  };

  const comparadorDataMes = () => {
    setdateComparator(`${dateMonthBefore[0]} - ${dateActual[0]}`);
    setmes(true);
    setsemana(false);
    sethoy(false);
    setaño(false);
  };

  const comparadorDataAño = () => {
    setdateComparator(`${dateYearBefore[0]} - ${dateActual[0]}`);
    setaño(true);
    setmes(false);
    setsemana(false);
    sethoy(false);
  };

  const calculateComparador = (a: number) => {
    setdateActual(calculateDateActual);
    setdateWeekBefore(calculateDateWeekBefore);
    setdateMonthBefore(calculateDateMonthBefore);
    setdateYearBefore(calculateDateYearBefore);
    switch (a) {
      case 1:
        conparadorState();
        setrenderCards(dataImportData);
        setnumberComparate(1);
        setdateInitial(dateActual[1]);
        setdateFinal(dateActual[1]);
        break;
      case 2:
        comparadorData();
        setrenderCards(dataImportData);
        setnumberComparate(2);
        setdateInitial(dateWeekBefore[1]);
        setdateFinal(dateActual[1]);
        break;
      case 3:
        comparadorDataMes();
        setrenderCards(dataImportData);
        setnumberComparate(3);
        setdateInitial(dateMonthBefore[1]);
        setdateFinal(dateActual[1]);
        break;
      case 4:
        comparadorDataAño();
        setrenderCards(dataImportData);
        setnumberComparate(4);
        setdateInitial(dateYearBefore[1]);
        setdateFinal(dateActual[1]);
        break;

      case 5:
        if (days?.length == 2) {
          const dateCalendarBefore = calculateDateArrayCalendar(days[0]);
          const dateCalendarAfter = calculateDateArrayCalendar(days[1]);
          setdateComparator(
            comparateDateMajorDate(dateCalendarBefore[0], dateCalendarAfter[0])
          );
          setrenderCards(dataImportData);
          setnumberComparate(5);
          setdateInitial(dateCalendarBefore[1]);
          setdateFinal(dateCalendarAfter[1]);
        } else if (days?.length == 1) {
          const dateCalendarActual = calculateDateArrayCalendar(days[0]);
          setdateComparator(dateCalendarActual[0]);
          setrenderCards(dataImportData);
          setnumberComparate(5);
          setdateInitial(dateCalendarActual[1]);
          setdateFinal(dateCalendarActual[1]);
        } else {
          return;
        }
        break;
    }
  };

  const changeViewCalendar = () => {
    setviewCalendar(!viewCalendar);
    sethoy(false);
  };

  const selectCanceledOrCompleted = (a: number) => {

    a == 2
      ? setcanceledOrCompleted("completed")
      : a == 1
      ? setcanceledOrCompleted("cancelled")
      : setcanceledOrCompleted("all");
  };

  const allClien = async () => {
    try {
      const { data } = await getAllPartnerGeneral();

      setinfoDataClient(
        data.map((pa: any) => {
          return {
            id: pa.fk_user_id,
            names: pa.comercial_name,
            photo:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s",
          };
        })
      );
      setClienId(data[0].fk_user_id);
    } catch (error) {}
  };

  const getAllPartners = async (
    date_initial: string,
    date_final: string,
    completed_cancelled_all: string
  ) => {
    try {
      const user_id = clientId;

      const { data } = await getAllPartnerSell(
        date_initial,
        date_final,
        user_id,
        completed_cancelled_all
      );
      setdataImportData(data.data);
      const cancelled = data.data.reduce((acc:number, el:any) => (el.status === 'cancelled') ? acc + 1 : acc, 0)
      const refoundedEl = data.data.reduce((acc:number, el:any) => (el.devoluciones) ? acc + 1 : acc, 0)
      setCountRefounded(refoundedEl)
      setCountCancelled(cancelled)
      setdataImportGeneral(data);
    } catch (error) {
      console.log(error);
    }
  };

  const footer = (
    <button
      onClick={() => {
        calculateComparador(5), changeViewCalendar();
      }}
    >
      Buscar
    </button>
  );

  let userId: any = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const getUserByIds = async () => {
    try {
      const rest = await getUserById(clientId);
      setinfoData(rest.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserByIds();
  }, [clientId]);

  useEffect(() => {
    calculateComparador(numberComparate);
    allClien();
    SecurityPrivileges();
    getUserByIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    calculateComparador(numberComparate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataImportData]);

  useEffect(() => {
    calculateComparador(numberComparate);
    getAllPartners(dateInitial, dateFinal, canceledOrCompleted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateInitial, dateFinal, canceledOrCompleted, clientId]);

  const selectionData = {
    changeViewCalendar: changeViewCalendar,
    calculateComparador: calculateComparador,
    selectCanceledOrCompleted: selectCanceledOrCompleted,
    visibleMenu: visibleMenu,
    setvisibleMenu: setvisibleMenu,
    dataImportGeneral: dataImportGeneral,
    hoy: hoy,
    semana: semana,
    mes: mes,
    año: año,
  };

  const electionData = {
    visibleMenu: visibleMenu,
    setvisibleMenu: setvisibleMenu,
    calculateComparador: calculateComparador,
  };

  const adminSalesData = {
    dataImportGeneral: dataImportGeneral,
    dateComparator: dateComparator,
    currency: currency,
    countCancelled,
    refounded: countRefounded
  };

  return (
    <div className="payments-sale-admin payments-sale-container-general-main main-page">
      <div className="payments-sale-container-general-child main-page">
        <div
          className={`container-sibaritta-general  ${
            saleOrPay ? "active" : ""
          }`}
        >
          <div
            className={`day-picker-container ${
              viewCalendar ? "activate" : ""
            } `}
          >
            <DayPicker
              mode="multiple"
              max={2}
              selected={days}
              onSelect={setDays}
              footer={footer}
            />
          </div>
          <div className="image-logo">
            <Image
              width={100}
              height={100}
              className="w-full h-full"
              src={LogoImage.src}
              alt="Logo de la marca"
            />
          </div>
          <div className="header-text">
            <p className="header-text-welcome">Bienvenido</p>
            <p className="header-text-seratta">Seratta Gourmand Market</p>
          </div>
          <div className="pay-sale-container">
            <div className="pay-sale-container-left">
              <div className="pay-sale-container-left-buttons-and-selector flex flex-col gap-3 ">
                <div className="pay-sale-container-left-buttons">
                  <button
                    onClick={() => {
                      changeSale(), calculateDateActual();
                      setviewSelectorPartner(true);
                    }}
                    className={`pay-sale-button-sale ${
                      saleOrPay
                        ? "bg-[#f89c53] duration-[300ms] ease-in-out"
                        : "!bg-[#4D3452] !text-[#DDD0C1]"
                    }`}
                  >
                    Ventas
                  </button>
                  <button
                    onClick={() => {
                      changePay(), setviewSelectorPartner(false);
                    }}
                    className={`pay-sale-button-pay duration-[300ms] ease-in-out
          ${saleOrPay ? "bg-[#4D3452]" : "!bg-[#f89c53] !text-[#252127]"}`}
                  >
                    Pagos
                  </button>
                </div>
                {viewSelectorPartner === false ? (
                  <div className="pay-sale-partners-container">
                    <div className="pay-sale-partners-p-containers">
                      <p>PARTNER</p>
                      <p>
                        <b>Seratta Gourmand Market</b>
                      </p>
                    </div>
                    <div className="w-[8rem] flex justify-center items-center">
                      <Image
                        width={1000}
                        height={1000}
                        className="object-cover"
                        src={LogoSerata.src}
                        alt="Logo de la marca"
                      />
                    </div>
                    {/* <div className="box_content_search_triangulo"></div> */}
                    <SearchPartnerSalePay
                      select={"SOCIO"}
                      infoData={infoDataClient}
                      setpartId={setClienId}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {viewSelectorPartner === true ? (
                <div className="pay-sale-partners-container2">
                  <div className="pay-sale-partners-p-containers">
                    <p>PARTNER</p>
                    <p>
                      <b>{infoData?.name}</b>
                    </p>
                  </div>
                  <div className="w-[5rem] h-[auto] ">
                    <Image
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                      src={infoData?.avatar}
                      alt="Logo de la marca"
                    />
                  </div>
                  {/* <div className="box_content_search_triangulo"></div> */}
                  <SearchPartnerSalePay
                    select={"SOCIO"}
                    infoData={infoDataClient}
                    setpartId={setClienId}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className={`pay-sale-container-right ${
                saleOrPay ? "" : "active"
              }`}
            >
              <div className="pay-sale-container-right-left">
                <p className="pay-sale-container-right-left-1">
                  Período actual
                </p>
                <p className="pay-sale-container-right-left-2">
                  {`${dateComparator}`}
                </p>
              </div>
              <div className="pay-sale-container-right-right">
                <p className="pay-sale-container-right-right-1">
                  Total a Pagar
                </p>
                <p className="pay-sale-container-right-right-2">{}</p>
                <p className="pay-sale-container-right-right-3">
                  Después de comisiones
                </p>
              </div>
            </div>
          </div>
          <div
            className={`sale-sibaritta-general main-page ${
              saleOrPay ? "active" : ""
            }`}
          >
            <SelectionDateVentas selectionData={selectionData} />
            <AdminSalesInformation adminSalesData={adminSalesData} status={canceledOrCompleted} />
            <div className="sale-especific-container-general">
              {[...renderCards]
                ?.map((object: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`sale-especific-container activate`}
                    >
                      <CardVentasSibaritta DataSibaritta={object} isAdmin={true} />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className={`pay-sibaritta-general main-page ${
              saleOrPay ? "" : "active"
            }`}
          >
            <ElectionDatePay electionData={electionData} />
            <PaymentsInformation dateComparator={dateComparator} />
            <div className="sale-especific-container-general-pay">
              {renderCards.map((object: any, index: number) => (
                <div key={index} className="sale-especific-container-pay">
                  <CardPaymentsSibaritta />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
