import { Footer, Header, Navbar } from "@/_components/layout";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="page">
          <Header />
          <Navbar />

          <div className="page-wrapper">
            {children}
            <Footer />
          </div>
        </div>

        <Script src="/assets/js/demo-theme.min.js" />
        <Script src="/assets/js/tabler.min.js" />
        <Script src="/assets/js/demo.min.js" />
      </body>
    </html>
  );
}
