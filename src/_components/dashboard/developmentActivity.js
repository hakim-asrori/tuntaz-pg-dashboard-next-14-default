"use client";

import { useEffect } from "react";
import Row from "../row";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DevelopmentActivity = () => {
  const optionDevGraph = {
    options: {
      chart: {
        type: "area",
        fontFamily: "inherit",
        height: 192,
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
      point: {
        show: false,
      },
    },
    series: [
      {
        name: "Purchases",
        data: [
          3, 5, 4, 6, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 8, 4, 14, 30, 17, 19, 15,
          14, 25, 32, 40, 55, 60, 48, 52, 70,
        ],
      },
    ],
  };

  const optionActGraph = {
    options: {
      chart: {
        type: "radialBar",
        fontFamily: "inherit",
        height: 40,
        width: 40,
        animations: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "75%",
          },
          track: {
            margin: 0,
          },
          dataLabels: {
            show: false,
          },
        },
      },
      colors: ["#0054a6"],
    },
    series: [35],
  };

  return (
    <div className="card">
      <div className="card-header border-0">
        <div className="card-title">Development activity</div>
      </div>

      <div className="position-relative">
        <div className="position-absolute top-0 left-0 px-3 mt-1 w-75">
          <Row className="g-2">
            <div className="col-auto">
              <Chart
                type="donut"
                options={optionActGraph.options}
                series={optionActGraph.series}
                height={optionActGraph.options.chart.height}
                width={optionActGraph.options.chart.width}
              />
            </div>
            <div className="col">
              <div>Today's Earning: $4,262.40</div>
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
                className="icon icon-inline text-green"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 17l6 -6l4 4l8 -8" />
                <path d="M14 7l7 0l0 7" />
              </svg>
              +5% more than yesterday
            </div>
          </Row>
        </div>
        <Chart
          type="area"
          options={optionDevGraph.options}
          series={optionDevGraph.series}
          height={optionDevGraph.options.chart.height}
        />
      </div>

      <div className="card-table table-responsive">
        <table className="table table-vcenter">
          <thead>
            <tr>
              <th>User</th>
              <th>Commit</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1">
                <span className="avatar avatar-sm">JL</span>
              </td>
              <td className="td-truncate">
                <div className="text-truncate">
                  Fix dart Sass compatibility (#29755)
                </div>
              </td>
              <td className="text-nowrap text-secondary">28 Nov 2019</td>
            </tr>
            <tr>
              <td className="w-1">
                <span className="avatar avatar-sm">JL</span>
              </td>
              <td className="td-truncate">
                <div className="text-truncate">
                  Change deprecated html tags to text decoration classes
                  (#29604)
                </div>
              </td>
              <td className="text-nowrap text-secondary">27 Nov 2019</td>
            </tr>
            <tr>
              <td className="w-1">
                <span className="avatar avatar-sm">JL</span>
              </td>
              <td className="td-truncate">
                <div className="text-truncate">
                  justify-content:between ⇒ justify-content:space-between
                  (#29734)
                </div>
              </td>
              <td className="text-nowrap text-secondary">26 Nov 2019</td>
            </tr>
            <tr>
              <td className="w-1">
                <span className="avatar avatar-sm">JL</span>
              </td>
              <td className="td-truncate">
                <div className="text-truncate">
                  Update change-version.js (#29736)
                </div>
              </td>
              <td className="text-nowrap text-secondary">26 Nov 2019</td>
            </tr>
            <tr>
              <td className="w-1">
                <span className="avatar avatar-sm">JL</span>
              </td>
              <td className="td-truncate">
                <div className="text-truncate">
                  Regenerate package-lock.json (#29730)
                </div>
              </td>
              <td className="text-nowrap text-secondary">25 Nov 2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevelopmentActivity;
