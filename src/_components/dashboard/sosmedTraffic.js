"use client";

const SosmedTraffic = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Social Media Traffic</h3>
      </div>
      <div className="table-responsive">
        <table className="table card-table table-vcenter">
          <thead>
            <tr>
              <th>Network</th>
              <th colSpan="2">Visitors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Instagram</td>
              <td>3,550</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "71%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Twitter</td>
              <td>1,798</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "35.96%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>1,245</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "24.9%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>TikTok</td>
              <td>986</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "19.72%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Pinterest</td>
              <td>854</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "17.08%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>VK</td>
              <td>650</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "13%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Pinterest</td>
              <td>420</td>
              <td className="w-50">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "8.4%" }}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SosmedTraffic;
