import { Footer, Header, Navbar } from "@/_components/layout";
import "./globals.css";
import Script from "next/script";
import LogoSvg from "@/_assets/images/svg/logo.svg";

export const metadata = {
  title: "Tuntaz Dashboard",
  description: "Tuntaz Dashboard Merchant Payment Gateway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={LogoSvg.src} sizes="any" />
        <link
          rel="icon"
          href={LogoSvg.src + "?<generated>"}
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href={LogoSvg.src + "?<generated>"}
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={``}>
        {children}

        <Script src="/assets/js/demo-theme.min.js" />
        <Script src="/assets/js/tabler.min.js" />
        <Script src="/assets/js/demo.min.js" />
      </body>
    </html>
  );
}
