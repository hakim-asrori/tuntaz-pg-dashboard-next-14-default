import { useMemo } from "react";

const Legend = ({color, label, count, children, className}) => {
  return (
    <span>
      <span className={`legend me-2 bg-${color}`}></span>
      <span>{label}</span>
      <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-secondary">
        {count}
      </span>
    </span>
  );
}

export default Legend