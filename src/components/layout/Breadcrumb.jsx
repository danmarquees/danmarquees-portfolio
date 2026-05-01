export function Breadcrumb({ sections, activeSection, onNavigate }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Page navigation breadcrumbs">
      <ol className="breadcrumb-list">
        {sections.map(([id, label], index) => {
          const sectionName = id.slice(1);
          const isActive = activeSection === sectionName;

          return (
            <li key={id} className="breadcrumb-item">
              {index > 0 && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
              {isActive ? (
                <span className="breadcrumb-current" aria-current="page">
                  {label}
                </span>
              ) : (
                <a
                  href={id}
                  className="breadcrumb-link"
                  onClick={e => onNavigate(e, id)}
                >
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
