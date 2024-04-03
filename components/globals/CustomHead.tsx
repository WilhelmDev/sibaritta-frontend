import { FC } from "react";
import Script from "next/script";
import { useButton } from "@/hook/useButton";

export const CustomHead: FC = () => {
  // Agrega GetButton
  useButton();

  return (
    <>
      {"https://es-la.facebook.com/" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=https://es-la.facebook.com/`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'https://es-la.facebook.com/', {
                     page_path: window.location.pathname
                  })`,
            }}
          />
        </>
      )}

      {"https://es-la.facebook.com/" && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://connect.facebook.net/en_US/fbevents.js"
          />

          <Script
            id="pixel-facebook"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
               !function(f) {
                  if (f.fbq) return;
                  var n = f.fbq = function() {
                     n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                  };
                  if (!f._fbq) f._fbq = n;
                  n.push = n;
                  n.loaded = !0;
                  n.version = '2.0';
                  n.queue = [];
               }(window);
               fbq('init', 'https://es-la.facebook.com/');
               fbq('track', 'PageView');`,
            }}
          />
        </>
      )}
    </>
  );
};
