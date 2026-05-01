export function Loader({ loaderHidden, loaderProgress, loaderRef, loaderNameRef }) {
  if (loaderHidden) return null;

  return (
    <div id="loader" ref={loaderRef}>
      <div className="loader-name" ref={loaderNameRef}>
        Dan Marques<span className="loader-accent">.</span>
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" style={{ width: `${loaderProgress}%` }} />
      </div>
      <div className="loader-counter">
        {String(Math.floor(loaderProgress)).padStart(3, '0')}
      </div>
    </div>
  );
}
