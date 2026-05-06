import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper/LayoutWrapper";

export const metadata = {
  title: "BeeWeave - Your Ultimate AI Resource Hub in 2025",
  description:
    "Discover the best AI tools, resources, and insights at BeeWeave.",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jakarta.variable}
        suppressHydrationWarning
      >
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P8H32CRL');
    `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8H32CRL"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}