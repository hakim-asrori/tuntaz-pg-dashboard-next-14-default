import { CSpinner } from "@coreui/react";

const Loader = ({ isLoading }) => {
  return (
    <div className={`t__loading-section ${!isLoading ? "d-none" : ""}`}>
      <div className="t__custom-loading-circle">
        <CSpinner size="lg" />
      </div>
    </div>
  );
};

export default Loader;
