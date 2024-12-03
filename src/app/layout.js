import { Footer, Header, Navbar } from "@/_components/layout";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Tuntaz Dashboard",
  description: "Tuntaz Dashboard Merchant Payment Gateway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        {children}

        <Script src="/assets/js/demo-theme.min.js" />
        <Script src="/assets/js/tabler.min.js" />
        <Script src="/assets/js/demo.min.js" />
      </body>
    </html>
  );
}
