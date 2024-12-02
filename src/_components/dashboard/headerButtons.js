"use client";

import { CButton } from "@coreui/react";
import { useEffect } from "react";

const HeaderButtons = () => {
  useEffect(() => {}, []);

  return (
    <div className="btn-list">
      <CButton className="d-none d-sm-inline">New View</CButton>
      <CButton className="d-none d-sm-inline" color="primary">
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
          className="icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
        Create new report
      </CButton>
      <CButton className="d-sm-none btn-icon" color="primary">
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
          className="icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </CButton>
    </div>
  );
};

export default HeaderButtons;
