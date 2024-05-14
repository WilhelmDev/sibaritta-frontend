import { Inter, Lato } from "next/font/google";
import Header from "../molecules/Header";
import ObserverTop from "../atoms/Observertop";
import Footer from "../ui/Footer";
import { CustomHead } from "../globals/CustomHead";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderPartner from "@/components/organisms/partner/HeaderPartner";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setLocal } from "@/redux/slice/localSlice";
import CustomHeadWsp from "../globals/CustomHeadWsp";
import HeaderAdmin from "../organisms/admin/HeaderAdmin";

const loto = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const hideFooter = router.pathname === "/sibaritta";
  const local = useAppSelector((state) => state.local);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fkTypeuserFromLocalStorage = localStorage.getItem("fk_typeuser");
      dispatch(
        setLocal(
          fkTypeuserFromLocalStorage !== null as any
            ? fkTypeuserFromLocalStorage
            : null
        )
      );
    }
  }, [local, router]);

  return (
    <>
      <div className={`${loto.variable} ${inter.variable}`}>
        <CustomHeadWsp />
        {/* <CustomHead /> */}
        <ObserverTop />
        {(local.local === null as any || local.local == 1) && <Header />}
        {local.local === "2" && <HeaderPartner />}
        {local.local === "3" && <HeaderAdmin />}
        {children}
        {!hideFooter && <Footer />}
      </div>
    </>
  );
}
