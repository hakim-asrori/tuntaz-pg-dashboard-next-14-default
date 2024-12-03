"use client";

import { SERVICE } from "@/_constant/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [validated, setValidated] = useState(true);
  const $router = useRouter();

  const checkAuthorize = async () => {
    const token = Cookies.get("TTPG");

    try {
      const response = await axios.post(
        SERVICE.AUTH.PROFILE,
        {
          uuid: "2de5e6dfd04e49e58283485cbcdab3fa",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status != CODE.SUCCESS) {
        Cookies.remove("TTPG");
        setValidated(false);
      } else {
        setValidated(true);
      }
    } catch (error) {
      Cookies.remove("TTPG");
      setValidated(false);
    }
  };

  useEffect(() => {
    checkAuthorize();
  }, []);

  return validated ? (
    <div className="page">{children}</div>
  ) : (
    $router.push("/sign/in")
  );
};

export default Layout;
