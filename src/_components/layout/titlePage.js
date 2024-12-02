import { CCol, CContainer, CRow } from "@coreui/react";

const TitlePage = ({ title, pretitle, children }) => {
  return (
    <div className="page-header d-print-none">
      <CContainer xl>
        <CRow className="align-items-center g-2">
          <CCol>
            {pretitle ? <div className="page-pretitle">{pretitle}</div> : <></>}
            <h2 className="page-title">{title}</h2>
          </CCol>
          {children}
        </CRow>
      </CContainer>
    </div>
  );
};

export default TitlePage;
