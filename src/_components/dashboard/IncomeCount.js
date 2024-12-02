"use client";

import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { Flex, Dropdown, Progress, ProgressBar } from "../";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const IncomeCount = () => {
  const optionRevenueGraph = {
    options: {
      chart: {
        type: "area",
        fontFamily: "inherit",
        height: 40.0,
        sparkline: {
          enabled: true,
        },
        animations: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.16,
        type: "solid",
      },
      stroke: {
        width: 2,
        lineCap: "round",
        curve: "smooth",
      },
      tooltip: {
        theme: "dark",
      },
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          show: false,
        },
        type: "datetime",
      },
      yaxis: {
        labels: {
          padding: 4,
        },
      },
      labels: [
        "2020-06-21",
        "2020-06-22",
        "2020-06-23",
        "2020-06-24",
        "2020-06-25",
        "2020-06-26",
        "2020-06-27",
        "2020-06-28",
        "2020-06-29",
        "2020-06-30",
        "2020-07-01",
        "2020-07-02",
        "2020-07-03",
        "2020-07-04",
        "2020-07-05",
        "2020-07-06",
        "2020-07-07",
        "2020-07-08",
        "2020-07-09",
        "2020-07-10",
        "2020-07-11",
        "2020-07-12",
        "2020-07-13",
        "2020-07-14",
        "2020-07-15",
        "2020-07-16",
        "2020-07-17",
        "2020-07-18",
        "2020-07-19",
        "2020-07-20",
      ],
      colors: ["#0054a6"],
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "Profits",
        data: [
          37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
          53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67,
        ],
      },
    ],
  };

  const optionClientGraph = {
    options: {
      chart: {
        type: "line",
        fontFamily: "inherit",
        height: 40.0,
        sparkline: {
          enabled: true,
        },
        animations: {
          enabled: false,
        },
      },
      fill: {
        opacity: 1,
      },
      stroke: {
        width: [2, 1],
        dashArray: [0, 3],
        lineCap: "round",
        curve: "smooth",
      },
      tooltip: {
        theme: "dark",
      },
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false,
        },
        type: "datetime",
      },
      yaxis: {
        labels: {
          padding: 4,
        },
      },
      labels: [
        "2020-06-21",
        "2020-06-22",
        "2020-06-23",
        "2020-06-24",
        "2020-06-25",
        "2020-06-26",
        "2020-06-27",
        "2020-06-28",
        "2020-06-29",
        "2020-06-30",
        "2020-07-01",
        "2020-07-02",
        "2020-07-03",
        "2020-07-04",
        "2020-07-05",
        "2020-07-06",
        "2020-07-07",
        "2020-07-08",
        "2020-07-09",
        "2020-07-10",
        "2020-07-11",
        "2020-07-12",
        "2020-07-13",
        "2020-07-14",
        "2020-07-15",
        "2020-07-16",
        "2020-07-17",
        "2020-07-18",
        "2020-07-19",
        "2020-07-20",
      ],
      colors: ["#0054a6", "#667382"],
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "May",
        data: [
          37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
          53, 61, 27, 54, 43, 4, 46, 39, 62, 51, 35, 41, 67,
        ],
      },
      {
        name: "April",
        data: [
          93, 54, 51, 24, 35, 35, 31, 67, 19, 43, 28, 36, 62, 61, 27, 39, 35,
          41, 27, 35, 51, 46, 62, 37, 44, 53, 41, 65, 39, 37,
        ],
      },
    ],
  };

  const optionUserGraph = {
    options: {
      chart: {
        type: "bar",
        fontFamily: "inherit",
        height: 40.0,
        sparkline: {
          enabled: true,
        },
        animations: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
      grid: {
        strokeDashArray: 4,
      },
      xaxis: {
        labels: {
          padding: 0,
        },
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          show: false,
        },
        type: "datetime",
      },
      yaxis: {
        labels: {
          padding: 4,
        },
      },
      labels: [
        "2020-06-21",
        "2020-06-22",
        "2020-06-23",
        "2020-06-24",
        "2020-06-25",
        "2020-06-26",
        "2020-06-27",
        "2020-06-28",
        "2020-06-29",
        "2020-06-30",
        "2020-07-01",
        "2020-07-02",
        "2020-07-03",
        "2020-07-04",
        "2020-07-05",
        "2020-07-06",
        "2020-07-07",
        "2020-07-08",
        "2020-07-09",
        "2020-07-10",
        "2020-07-11",
        "2020-07-12",
        "2020-07-13",
        "2020-07-14",
        "2020-07-15",
        "2020-07-16",
        "2020-07-17",
        "2020-07-18",
        "2020-07-19",
        "2020-07-20",
      ],
      colors: ["#0054a6"],
      legend: {
        show: false,
      },
    },
    series: [
      {
        name: "Profits",
        data: [
          37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
          53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67,
        ],
      },
    ],
  };

  return (
    <CRow className="row-deck row-cards">
      <CCol sm="6" lg="3" className="mb-2">
        <CCard className="overflow-hidden">
          <CCardBody>
            <Flex className={"align-items-center"}>
              <div className="subheader">Sales</div>
              <div className="ms-auto lh-1">
                <Dropdown label="Last 7 days">
                  <a className="dropdown-item active" href="#">
                    Last 7 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 30 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 3 months
                  </a>
                </Dropdown>
              </div>
            </Flex>
            <div className="h1 mb-3">75%</div>
            <Flex className="mb-2">
              <div>Conversion rate</div>
              <div className="ms-auto">
                <span className="text-green d-inline-flex align-items-center lh-1">
                  7%
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
                    className="icon ms-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17l6 -6l4 4l8 -8" />
                    <path d="M14 7l7 0l0 7" />
                  </svg>
                </span>
              </div>
            </Flex>
            <Progress>
              <ProgressBar count={75} />
            </Progress>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" lg="3" className="mb-2">
        <CCard className="overflow-hidden">
          <CCardBody>
            <Flex className={"align-items-center"}>
              <div className="subheader">Revenue</div>
              <div className="ms-auto lh-1">
                <Dropdown label="Last 7 days">
                  <a className="dropdown-item active" href="#">
                    Last 7 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 30 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 3 months
                  </a>
                </Dropdown>
              </div>
            </Flex>
            <Flex className={"align-items-baseline"}>
              <div className="h1 mb-0 me-2">$4,300</div>
              <div className="me-auto">
                <span className="text-green d-inline-flex align-items-center lh-1">
                  8%
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
                    className="icon ms-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17l6 -6l4 4l8 -8" />
                    <path d="M14 7l7 0l0 7" />
                  </svg>
                </span>
              </div>
            </Flex>
          </CCardBody>
          <Chart
            type="area"
            options={optionRevenueGraph.options}
            series={optionRevenueGraph.series}
            height={optionRevenueGraph.options.chart.height}
          />
        </CCard>
      </CCol>
      <CCol sm="6" lg="3" className="mb-2">
        <CCard className="overflow-hidden">
          <CCardBody>
            <Flex className={"align-items-center"}>
              <div className="subheader">New clients</div>
              <div className="ms-auto lh-1">
                <Dropdown label="Last 7 days">
                  <a className="dropdown-item active" href="#">
                    Last 7 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 30 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 3 months
                  </a>
                </Dropdown>
              </div>
            </Flex>
            <Flex className={"align-items-baseline"}>
              <div className="h1 mb-0 me-2">6,782</div>
              <div className="me-auto">
                <span className="text-green d-inline-flex align-items-center lh-1">
                  0%
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
                    className="icon ms-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                  </svg>
                </span>
              </div>
            </Flex>
          </CCardBody>
          <Chart
            type="line"
            options={optionClientGraph.options}
            series={optionClientGraph.series}
            height={optionClientGraph.options.chart.height}
          />
        </CCard>
      </CCol>
      <CCol sm="6" lg="3" className="mb-2">
        <CCard className="overflow-hidden">
          <CCardBody>
            <Flex className={"align-items-center"}>
              <div className="subheader">Active users</div>
              <div className="ms-auto lh-1">
                <Dropdown label="Last 7 days">
                  <a className="dropdown-item active" href="#">
                    Last 7 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 30 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 3 months
                  </a>
                </Dropdown>
              </div>
            </Flex>
            <Flex className={"align-items-baseline"}>
              <div className="h1 mb-0 me-2">2,986</div>
              <div className="me-auto">
                <span className="text-green d-inline-flex align-items-center lh-1">
                  4%
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
                    className="icon ms-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17l6 -6l4 4l8 -8" />
                    <path d="M14 7l7 0l0 7" />
                  </svg>
                </span>
              </div>
            </Flex>
          </CCardBody>
          <Chart
            type="bar"
            options={optionUserGraph.options}
            series={optionUserGraph.series}
            height={optionUserGraph.options.chart.height}
          />
        </CCard>
      </CCol>
    </CRow>
  );
};

export default IncomeCount;
