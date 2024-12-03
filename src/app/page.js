"use client";

import { Flex } from "@/_components";
import SignIn from "@/app/sign/page";
import { CContainer } from "@coreui/react";
import WavesSvg from "@/_assets/images/svg/waves.svg";

export default function Page() {
  return (
    <Flex className={"flex-column h-100"}>
      <div className="page page-center z-3">
        <CContainer className="container-normal py-4">
          <SignIn />
        </CContainer>
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
