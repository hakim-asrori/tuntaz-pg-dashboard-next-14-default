import { CCol, CContainer, CRow } from "@coreui/react";

const Footer = ({ props, router }) => {
  return (
    <footer className="footer footer-transparent d-print-none">
      <CContainer xl>
        <CRow className="text-center align-items-center flex-row-reverse">
          <CCol lg="auto" className="ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                <a
                  href="https://tabler.io/docs"
                  target="_blank"
                  className="link-secondary"
                  rel="noopener"
                >
                  Documentation
                </a>
              </li>
              <li className="list-inline-item">
                <a href="./license.html" className="link-secondary">
                  License
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/tabler/tabler"
                  target="_blank"
                  className="link-secondary"
                  rel="noopener"
                >
                  Source code
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/sponsors/codecalm"
                  target="_blank"
                  className="link-secondary"
                  rel="noopener"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon text-pink icon-filled icon-inline"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                  Sponsor
                </a>
              </li>
            </ul>
          </CCol>
          <CCol lg="auto" md="12" sm="12" className="mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright © 2024
                <a href="." className="link-secondary">
                  Tabler
                </a>
                . All rights reserved.
              </li>
              <li className="list-inline-item">
                <a
                  href="./changelog.html"
                  className="link-secondary"
                  rel="noopener"
                >
                  v1.0.0-beta21
                </a>
              </li>
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </footer>
  );
};

export default Footer;
