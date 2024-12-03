import { Flex } from "@/_components";
import { CContainer } from "@coreui/react";
import WavesSvg from "@/_assets/images/svg/waves.svg";
import { ToastContainer } from "react-toastify";

export default function SignLayout({ children }) {
  return (
    <Flex className="flex-column h-100">
      <ToastContainer />
      <div className="page page-center z-3">
        <CContainer className="container-normal py-4">{children}</CContainer>
      </div>
      <div
        style={{
          backgroundImage: `url(${WavesSvg.src})`,
          width: "100%",
          height: "300px",
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          backgroundSize: "cover",
        }}
      ></div>
    </Flex>
  );
}
