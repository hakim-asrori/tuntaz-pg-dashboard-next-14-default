const Dropdown = ({ label, children }) => {
  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle text-secondary"
        href="#"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </a>
      <div className="dropdown-menu dropdown-menu-end">{children}</div>
    </div>
  );
};

export default Dropdown;
