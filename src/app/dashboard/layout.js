import { Footer, Header, Navbar } from "@/_components/layout";

export default function DashboardLayout({ children }) {
  return (
    <div className="page">
      <Header />
      <Navbar />

      <div className="page-wrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
}
