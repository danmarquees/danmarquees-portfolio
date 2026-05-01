export function ThemeIcon() {
  return (
    <span className="theme-toggle-track" aria-hidden="true">
      <span className="theme-toggle-icon theme-toggle-sun">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5V5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="theme-toggle-icon theme-toggle-moon">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M20 14.2A7.7 7.7 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="theme-toggle-thumb" />
    </span>
  );
}
