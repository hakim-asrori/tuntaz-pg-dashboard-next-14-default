"use client";

import { useEffect } from "react";

const MapLocation = () => {
  useEffect(() => {
    
  }, [])

  return (
    <div className="card overflow-hidden">
      <div className="card-body">
        <h3 className="card-title">Locations</h3>
      </div>
      <div id="map-world" className="w-100 h-100"></div>
    </div>
  );
};

export default MapLocation;
