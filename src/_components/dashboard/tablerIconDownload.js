"use client";

import Row from "../row";

const TablerIconDownload = () => {
  return (
    <div className="card sticky-top card-md">
      <div className="card-stamp card-stamp-lg">
        <div className="card-stamp-icon bg-primary">
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
            <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
            <path d="M10 10l.01 0" />
            <path d="M14 10l.01 0" />
            <path d="M10 14a3.5 3.5 0 0 0 4 0" />
          </svg>
        </div>
      </div>
      <div className="card-body">
        <Row className="align-items-center">
          <div className="col-10">
            <h3 className="h1">Tabler Icons</h3>
            <div className="markdown text-secondary">
              All icons come from the Tabler Icons set and are MIT-licensed.
              Visit
              <a href="https://tabler-icons.io" target="_blank" rel="noopener">
                tabler-icons.io
              </a>
              , download any of the 5628 icons in SVG, PNG or&nbsp;React and use
              them in your favourite design tools.
            </div>
            <div className="mt-3">
              <a
                href="https://tabler-icons.io"
                className="btn btn-primary"
                target="_blank"
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
                  className="icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
                Download icons
              </a>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default TablerIconDownload;
