"use client"

import { Flex } from "@/_components";
import SignIn from "@/app/sign/page"
import { CContainer } from "@coreui/react";

export default function Page() {
  return (
    <Flex className={"flex-column"}>
      <div className="page page-center">
        <CContainer className="container-normal py-4">
          <SignIn />
        </CContainer>
      </div>
    </Flex>
  );
}
