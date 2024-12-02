import { Row } from "../";

const ShareCount = () => {
  return (
    <Row className="row-cards">
      <div className="col-sm-6 col-lg-3 mb-3">
        <div className="card card-sm overflow-hidden">
          <div className="card-body">
            <Row className={"align-items-center"}>
              <div className="col-auto">
                <span className="bg-primary text-white avatar">
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
                    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                    <path d="M12 3v3m0 12v3" />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">132 Sales</div>
                <div className="text-secondary">12 waiting payments</div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 mb-3">
        <div className="card card-sm overflow-hidden">
          <div className="card-body">
            <Row className={"align-items-center"}>
              <div className="col-auto">
                <span className="bg-green text-white avatar">
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
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">78 Orders</div>
                <div className="text-secondary">32 shipped</div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 mb-3">
        <div className="card card-sm overflow-hidden">
          <div className="card-body">
            <Row className={"align-items-center"}>
              <div className="col-auto">
                <span className="bg-dark text-white avatar">
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">623 Shares</div>
                <div className="text-secondary">16 today</div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 mb-3">
        <div className="card card-sm overflow-hidden">
          <div className="card-body">
            <Row className={"align-items-center"}>
              <div className="col-auto">
                <span className="bg-facebook text-white avatar">
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
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium">132 Likes</div>
                <div className="text-secondary">21 today</div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default ShareCount;
