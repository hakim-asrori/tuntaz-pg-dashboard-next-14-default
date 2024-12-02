import { Flex } from "@/_components";
import { CContainer } from "@coreui/react";

export default function SignLayout({children}) {
  return (
    <Flex className={'flex-column'}>
      <div className="page page-center">
        <CContainer className="container-normal py-4">
          {children}
        </CContainer>
      </div>
    </Flex>
  );
}