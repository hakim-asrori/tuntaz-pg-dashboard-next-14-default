import { Footer, Header, Navbar } from "@/_components/layout";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }) {
  return (
    <div className="page">
      <ToastContainer />
      <Header />
      <Navbar />

      <div className="page-wrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
}
