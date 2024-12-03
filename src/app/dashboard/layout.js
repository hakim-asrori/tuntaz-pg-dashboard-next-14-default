import { Footer, Header, Navbar } from "@/_components/layout";
import { CODE, SERVICE } from "@/_constant/api";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  // const $router = useRouter();

  // const checkAuthorize = async () => {
  //   const token = Cookies.get("TTPG");

  //   try {
  //     const response = await axios.post(
  //       SERVICE.AUTH.PROFILE,
  //       {
  //         uuid: "2de5e6dfd04e49e58283485cbcdab3fa",
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.data.status != CODE.SUCCESS) {
  //       Cookies.remove("TTPG");
  //       $router.push("/sign");
  //     }
  //   } catch (error) {
  //     Cookies.remove("TTPG");
  //     $router.push("/sign");
  //   }
  // };

  // useEffect(() => {
  //   checkAuthorize();
  // }, []);

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
