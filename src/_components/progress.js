const Progress = ({ type, children, className }) => {
  return <div className={`progress progress-${type} ${className}`}>{children}</div>;
};

export default Progress