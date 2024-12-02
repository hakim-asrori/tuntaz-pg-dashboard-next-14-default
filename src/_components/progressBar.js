const ProgressBar = ({ color, count, minCount, maxCount, label, children }) => {
  return <div className={`progress-bar bg-${color}`} style={{ width: `${count}%` }} role="progressbar" aria-valuenow={count} aria-valuemin={minCount} aria-valuemax={maxCount} aria-label={`${count}% ${label}`}>
    <span className="visually-hidden">{count} {label}</span>
  </div>;
};

export default ProgressBar