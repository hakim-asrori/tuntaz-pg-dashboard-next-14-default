import { Footer, Header, Navbar } from "@/_components/layout";
import { MENU_THEME } from "@/_constant/global";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";

const DashboardLayout = ({ children }) => {
  let checkMenuTheme = MENU_THEME.NAVBAR;

  const cookieStore = cookies();
  const menuTheme = cookieStore.get("menu-theme");
  if (menuTheme && menuTheme.value) {
    checkMenuTheme = menuTheme.value;
  }

  return (
    <div className="page">
      <ToastContainer />
      {/* Header For Usage Navbar */}
      {checkMenuTheme != MENU_THEME.SIDEBAR ? <Header type="navbar" /> : <></>}

      {/* Navbar functionally by cookie value navbar or sidebar */}
      <Navbar />

      {/* Header For Usage Sidebar */}
      {checkMenuTheme == MENU_THEME.SIDEBAR ? <Header type="sidebar" /> : <></>}

      <div className="page-wrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
