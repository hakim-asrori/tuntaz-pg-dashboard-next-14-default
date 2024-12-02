const LayoutPage = ({ children }) => {
  return (
    <div className="page-body">
      <div className="container-xl">{children}</div>
    </div>
  );
};

export default LayoutPage;
