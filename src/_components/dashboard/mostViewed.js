"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const MostViewed = () => {
  const optionViewGraph = {
    options: {
      chart: {
        type: "line",
        fontFamily: "inherit",
        height: 24,
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
      stroke: {
        width: 2,
        lineCap: "round",
      },
    },
    series: [
      {
        color: "#0054a6",
        data: [6, 15, 13, 13, 5, 7, 17, 20, 19],
      },
    ],
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Most Visited Pages</h3>
      </div>
      <div className="table-responsive">
        <table className="table table-vcenter">
          <thead>
            <tr>
              <th>Page name</th>
              <th>Visitors</th>
              <th>Unique</th>
              <th colSpan="2">Bounce rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                /
                <a href="#" className="ms-1" aria-label="Open website">
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
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </a>
              </td>
              <td className="text-secondary">4,896</td>
              <td className="text-secondary">3,654</td>
              <td className="text-secondary">82.54%</td>
              <td className="text-end w-1">
                <Chart
                  type="line"
                  options={optionViewGraph.options}
                  series={optionViewGraph.series}
                  height={optionViewGraph.options.chart.height}
                />
              </td>
            </tr>
            <tr>
              <td>
                /form-elements.html
                <a href="#" className="ms-1" aria-label="Open website">
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
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </a>
              </td>
              <td className="text-secondary">3,652</td>
              <td className="text-secondary">3,215</td>
              <td className="text-secondary">76.29%</td>
              <td className="text-end w-1">
                <Chart
                  type="line"
                  options={optionViewGraph.options}
                  series={optionViewGraph.series}
                  height={optionViewGraph.options.chart.height}
                />
              </td>
            </tr>
            <tr>
              <td>
                /index.html
                <a href="#" className="ms-1" aria-label="Open website">
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
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </a>
              </td>
              <td className="text-secondary">3,256</td>
              <td className="text-secondary">2,865</td>
              <td className="text-secondary">72.65%</td>
              <td className="text-end w-1">
                <Chart
                  type="line"
                  options={optionViewGraph.options}
                  series={optionViewGraph.series}
                  height={optionViewGraph.options.chart.height}
                />
              </td>
            </tr>
            <tr>
              <td>
                /icons.html
                <a href="#" className="ms-1" aria-label="Open website">
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
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </a>
              </td>
              <td className="text-secondary">986</td>
              <td className="text-secondary">865</td>
              <td className="text-secondary">44.89%</td>
              <td className="text-end w-1">
                <Chart
                  type="line"
                  options={optionViewGraph.options}
                  series={optionViewGraph.series}
                  height={optionViewGraph.options.chart.height}
                />
              </td>
            </tr>
            <tr>
              <td>
                /docs/
                <a href="#" className="ms-1" aria-label="Open website">
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
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </a>
              </td>
              <td className="text-secondary">912</td>
              <td className="text-secondary">822</td>
              <td className="text-secondary">41.12%</td>
              <td className="text-end w-1">
                <Chart
                  type="line"
                  options={optionViewGraph.options}
                  series={optionViewGraph.series}
                  height={optionViewGraph.options.chart.height}
                />
              </td>
            </tr>
            <tr>
              <td>
                /accordion.html
                <a href="#" className="ms-1" aria-label="Open website">
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
                    <path d="M9 15l6 -6" />
                    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                  </svg>
                </a>
              </td>
              <td className="text-secondary">855</td>
              <td className="text-secondary">798</td>
              <td className="text-secondary">32.65%</td>
              <td className="text-end w-1">
                <Chart
                  type="line"
                  options={optionViewGraph.options}
                  series={optionViewGraph.series}
                  height={optionViewGraph.options.chart.height}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostViewed;
