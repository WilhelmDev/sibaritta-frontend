import React, { useEffect, useState } from "react";
import LogoImage from "@/public/ventas_sibarita/LOGO SIBARITTA.png";
import Image from "next/image";
import CardVentasSibaritta from "../../components/molecules/cards/card_ventas_sibaritta";
import CardPaymentsSibaritta from "../../components/molecules/cards/card_payments_sibaritta";
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
import { useRouter } from "next/router";
import useCurrency from "@/hook/partner/useCurrency";
import SelectionDateVentas from "./SelectionDateVentas";
import SalesInformation from "./SalesInformation";
import ElectionDatePay from "@/pages/ventas_sibaritta/ElectionDatePay";
import PaymentsInformation from "@/pages/ventas_sibaritta/PaymentsInformation";
import { getAllPartnerPayments, Payment } from "@/services/payment.service";
import { getPartnerByUserId } from "@/services/partnerPerfil.service";

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
  const [refounded, setRefounded] = useState(0)
  const [dataPayments, setDataPayments] = useState<Payment[]>([]);
  const [paymentsToShow, setPaymentsToShow] = useState<Payment[]>([]);
  const [fk_typeuser, setFk_typeuser] = useState<number>(1);
  const [cancelledCount, setCancelledCount] = useState(0)

  useEffect(() => {
    if (localStorage.saleStateFilter === "pay") setsaleOrPay(false);
    else setsaleOrPay(true);
    
  })
  
  const conparadorState = () => {
    sethoy(true);
    setdateComparator(dateActual[3]);
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
    setdateComparator(`${dateMonthBefore[0]} - ${dateActual[3]}`);
    setmes(true);
    setsemana(false);
    sethoy(false);
    setaño(false);
  };

  const comparadorDataAño = () => {
    setdateComparator(`${dateYearBefore[0]} - ${dateActual[3]}`);
    setaño(true);
    setmes(false);
    setsemana(false);
    sethoy(false);
  };

  const { currency } = useCurrency();

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

        setdateInitial(dateActual[4]);
        setdateFinal(dateActual[1]);

        break;
      case 2:
        comparadorData();

        setrenderCards(dataImportData);

        setnumberComparate(2);

        setdateInitial(dateWeekBefore[1]);
        setdateFinal(dateActual[1]);

        setPaymentsToShow(dataPayments.filter((payment) => {
          const startDate = payment.payment_period_start_date.slice(0, 10);
          const endDate = payment.payment_period_end_date.slice(0, 10);
          return startDate >= dateWeekBefore[1] && endDate <= dateActual[1]
        }));

        break;
      case 3:
        comparadorDataMes();

        setrenderCards(dataImportData);

        setnumberComparate(3);

        setdateInitial(dateMonthBefore[1]);
        setdateFinal(dateActual[4]);

        setPaymentsToShow(dataPayments.filter((payment) => {
          const startDate = payment.payment_period_start_date.slice(0, 10);
          const endDate = payment.payment_period_end_date.slice(0, 10);
          return startDate >= dateMonthBefore[1] && endDate <= dateActual[1]
        }))

        break;
      case 4:
        comparadorDataAño();

        setrenderCards(dataImportData);

        setnumberComparate(4);

        setdateInitial(dateYearBefore[1]);
        setdateFinal(dateActual[1]);

        setPaymentsToShow(dataPayments.filter((payment) => {
          const startDate = payment.payment_period_start_date.slice(0, 10);
          const endDate = payment.payment_period_end_date.slice(0, 10);
          
          return startDate >= dateYearBefore[1] && endDate <= dateActual[1]
        }));

        break;

      case 5:
        if (days.length == 2) {
          const dateCalendarBefore = calculateDateArrayCalendar(days[0]);
          const dateCalendarAfter = calculateDateArrayCalendar(days[1]);

          setdateComparator(
            comparateDateMajorDate(dateCalendarBefore[0], dateCalendarAfter[0])
          );

          setrenderCards(dataImportData);

          setnumberComparate(5);

          setdateInitial(dateCalendarBefore[1]);
          setdateFinal(dateCalendarAfter[1]);

          setPaymentsToShow(dataPayments.filter((payment) => {
            const startDate = payment.payment_period_start_date.slice(0, 10);
            const endDate = payment.payment_period_end_date.slice(0, 10);
            return startDate >= dateCalendarBefore[1] && endDate <= dateCalendarAfter[1]
          }));
        } else if (days.length == 1) {
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

  const getAllPartners = async (
    date_initial: string,
    date_final: string,
    completed_cancelled_all: string
  ) => {
    try {
      const user_id = localStorage.getItem("userid");

      const { data } = await getAllPartnerSell(
        date_initial,
        date_final,
        user_id,
        completed_cancelled_all
      );
      setdataImportData(data.data);
      const cancelled = data.data.reduce((acc:number, el:any) => (el.status === 'cancelled') ? acc + 1 : acc, 0)
      const refoundedEl = data.data.reduce((acc:number, el:any) => el.devoluciones ? acc + 1 : acc, 0)
      setRefounded(refoundedEl)
      setCancelledCount(cancelled)
      setdataImportGeneral(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPartnerPayments = async () => {
    try {
      const user_id = localStorage.getItem("userid");
      const partner = await getPartnerByUserId(Number(user_id));
      const partner_id = partner.id;
      const payments = await getAllPartnerPayments(partner_id);
      setDataPayments(payments)
    } catch (error) {
      console.log(error);
    }
  }

  const footer = (
    <button
      onClick={() => {
        calculateComparador(5), changeViewCalendar();
      }}
    >
      Buscar
    </button>
  );

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    user_id === "1" ? router.push("/") : "";
    // user_id === "2"?router.push("/home_partner"):"";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    calculateComparador(numberComparate);
    SecurityPrivileges();
    getPartnerPayments();
    setFk_typeuser(Number(localStorage.getItem("fk_typeuser")));
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
  }, [dateInitial, dateFinal, canceledOrCompleted]);

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

  const salesData = {
    dataImportGeneral: dataImportGeneral,
    dateComparator: dateComparator,
    currency: currency,
    refounded,
    cancelledCount
  };

  const electionData = {
    visibleMenu: visibleMenu,
    setvisibleMenu: setvisibleMenu,
    calculateComparador: calculateComparador,
  };

  return (
    <div className="VentasSibaritta payments-sale-container-general-main main-page">
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
            <div className="pay-sale-container-left boton">
              <button
                onClick={() => {
                  localStorage.setItem("saleStateFilter", "sale");
                  calculateDateActual();
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
                  localStorage.setItem("saleStateFilter", "pay");
                }}
                className={`pay-sale-button-pay duration-[300ms] ease-in-out
          ${saleOrPay ? "bg-[#4D3452]" : "!bg-[#f89c53] !text-[#252127]"}`}
              >
                Pagos
              </button>
            </div>
            <div
              className={`pay-sale-container-right  ${
                saleOrPay ? "" : "active"
              }`}
            >
              <div className="pay-sale-container-right-left">
                <p className="pay-sale-container-right-left-1">
                  Período actual
                </p>
                <p className="pay-sale-container-right-left-2">
                  {`${moment(dateWeekBefore[1]).utc().format("DD MMMM YYYY").replace(/\b\w/g, l => l.toUpperCase())} - ${moment(dateActual[0]).utc().format("DD MMMM YYYY").replace(/\b\w/g, l => l.toUpperCase())}`}
                </p>
              </div>
              <div className="pay-sale-container-right-right">
                <p className="pay-sale-container-right-right-1">
                  Total a Pagar
                </p>
                <p className="pay-sale-container-right-right-2">${dataPayments[0]?.amount} mxn</p>
                <p className="pay-sale-container-right-right-3">
                  Después de comisiones
                </p>
              </div>
            </div>
          </div>
          <div>

          sale-especific-container-general
          </div>
          <div
            className={`sale-sibaritta-general main-page ${
              saleOrPay ? "active" : ""
            }`}
          >
            <SelectionDateVentas selectionData={selectionData} />
            <SalesInformation salesData={salesData} status={canceledOrCompleted} />
            <div className="sale-especific-container-general">
              {[...renderCards]
                ?.map((object: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`sale-especific-container activate`}
                    >
                      <CardVentasSibaritta DataSibaritta={object} isAdmin={false}/>
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
            <ElectionDatePay electionData={electionData} payments={paymentsToShow} />
            <PaymentsInformation dateComparator={dateComparator} payments={paymentsToShow} />
            <div className="sale-especific-container-general-pay">
              {paymentsToShow.map((payment: Payment, index) => {
                if(index !== 0)
                return <div key={payment.id} className="sale-especific-container-pay">
                  <CardPaymentsSibaritta payment={payment} index={index} typeUser={fk_typeuser ?? 1} setDataPayments={setDataPayments} setPaymentsToShow={setPaymentsToShow} />
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
