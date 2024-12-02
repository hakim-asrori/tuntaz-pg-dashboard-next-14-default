"use client";

import { useEffect } from "react";
import Row from "../row";
import Progress from "../progress";
import ProgressBar from "../progressBar";
import Legend from "../legend";

const StorageSystem = () => {
  useEffect(() => {
    
  }, [])

  return (
    <Row className={"row-cards"}>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <p className="mb-3">
              Using Storage <strong>6854.45 MB </strong>of 8 GB
            </p>
            <Progress className="mb-3" type="separated">
              <ProgressBar count="44" color="primary" />
              <ProgressBar count="19" color="info" />
              <ProgressBar count="9" color="success" />
            </Progress>

            <Row>
              <div className="col-auto d-flex align-items-center pe-2">
                <Legend color="primary" label="Regular" count="915MB" />
              </div>
              <div className="col-auto d-flex align-items-center pe-2">
                <Legend color="info" label="System" count="415MB" />
              </div>
              <div className="col-auto d-flex align-items-center pe-2">
                <Legend color="success" label="Shared" count="201MB" />
              </div>
              <div className="col-auto d-flex align-items-center pe-2">
                <Legend color="" label="Free" count="612MB" />
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card" style={{ height: '28rem' }}>
          <div className="card-body card-body-scrollable card-body-scrollable-shadow">
            <div className="divide-y">
              {[1,2,3,4,5,6,7,8,9,0].map((index, data) => {
                return (
                  <Row key={index}>
                    <div className="col-auto">
                      <span className="avatar">JL</span>
                    </div>
                    <div className="col">
                      <div className="text-truncate">
                        <strong>Jeffie Lewzey</strong> commented on your
                        <strong>"I'm not a witch."</strong> post.
                      </div>
                      <div className="text-secondary">yesterday</div>
                    </div>
                    <div className="col align-self-center">
                      <span className="badge bg-primary"></span>
                    </div>
                  </Row>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default StorageSystem;
