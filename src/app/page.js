// "use client";

import {
  DevelopmentActivity,
  HeaderButtons,
  IncomeCount,
  Invoices,
  MapLocation,
  MostViewed,
  ShareCount,
  SosmedTraffic,
  StorageSystem,
  TablerIconDownload,
  Tasks,
  TrafficSummary,
} from "@/_components/dashboard";
import { LayoutPage, TitlePage } from "@/_components/layout";
import { CButton, CCol, CRow } from "@coreui/react";
import SponsorBanner from "@/_assets/static/sponsor-banner-homepage.svg";

export default function Home() {
  return (
    <div>
      <TitlePage title="Dashboard" pretitle="overview">
        <div className="col-auto ms-auto d-print-none">
          <HeaderButtons />
        </div>
      </TitlePage>
      <LayoutPage>
        <IncomeCount />
        <ShareCount />
        <CRow className={"row-deck row-cards mb-3"}>
          <CCol lg="6">
            <TrafficSummary />
          </CCol>
          <CCol lg="6">
            <MapLocation />
          </CCol>
          <CCol lg="6">
            <StorageSystem />
          </CCol>
          <CCol lg="6">
            <DevelopmentActivity />
          </CCol>
          <div className="col-12">
            <TablerIconDownload />
          </div>
          <div className="col-lg-8">
            <MostViewed />
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="card card-sponsor"
              style={{ backgroundImage: `url(${SponsorBanner.src})` }}
            ></div>
          </div>
          <div className="col-lg-4 col-md-6">
            <SosmedTraffic />
          </div>
          <div className="col-lg-8">
            <Tasks />
          </div>
          <div className="col-lg-12">
            <Invoices />
          </div>
        </CRow>
      </LayoutPage>
    </div>
  );
}
