import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "react-day-picker/dist/style.css";

import { NavbarProvider } from "@/context/navbar.context";
import Layout from "@/components/layouts/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Providers } from "@/redux/Provider";
import { useEffect, useState } from "react";
import { CustomLoading } from "@/components/atoms/CustomLoading";
import { PrimeReactProvider } from "primereact/api";
import Aos from "aos";

export default function App({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   // document.body.style.overflow = 'hidden'

  //   return () => {
  //     setTimeout(() => {
  //       setLoading(false);
  //       // document.body.style.overflow = ''
  //     }, 90000);
  //   };
  // }, []);
  const appIDGoogle = process.env.NEXT_PUBLIC_APP_ID_GOOGLE|| ""
  
  // clientId="84497751954-oou3o3tntmeevtjfnej92881gim7v8as.apps.googleusercontent.com"

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Providers>
        <GoogleOAuthProvider clientId={appIDGoogle}>
          <NavbarProvider>
            {/* {loading && <CustomLoading />} */}
            <Layout>
              <PrimeReactProvider>
                <Component {...pageProps} />
              </PrimeReactProvider>
            </Layout>
          </NavbarProvider>
        </GoogleOAuthProvider>
      </Providers>
    </>
  );
}
