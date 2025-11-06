import React from "react";

const whatsappNumber = "+5511970943345";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

const buttonStyle = {
  position: "fixed",
  right: "24px",
  bottom: "24px",
  zIndex: 1000,
  backgroundColor: "#25D366",
  borderRadius: "50%",
  width: "56px",
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  cursor: "pointer",
  border: "none",
};

const iconStyle = {
  width: "28px",
  height: "28px",
  fill: "#fff",
  display: "block",
};

const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    style={buttonStyle}
  >
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-hidden="true"
      focusable="false"
    >
      <g>
        <circle cx="224" cy="256" r="224" fill="#25D366" />
        <path
          d="M380.9 131.1c-34.5-34.5-80.4-53.5-129.4-53.5-101.1 0-183.4 82.3-183.4 183.4 0 32.3 8.6 63.9 24.9 91.5L64 448l98.2-25.8c26.6 14.6 56.7 22.3 88.3 22.3h.1c101.1 0 183.4-82.3 183.4-183.4 0-49-19-94.9-53.5-129.4zm-129.4 304.7c-28.1 0-55.7-7.2-79.8-20.8l-5.7-3.2-58.3 15.3 15.6-56.8-3.7-5.9c-15.7-25.1-24-54.1-24-83.9 0-88.2 71.8-160 160-160 42.7 0 82.8 16.6 112.9 46.7s46.7 70.2 46.7 112.9c0 88.2-71.8 160-160 160zm90.1-120.5c-4.9-2.5-29-14.3-33.5-15.9-4.5-1.7-7.8-2.5-11.1 2.5-3.3 4.9-12.7 15.9-15.6 19.2-2.9 3.3-5.7 3.7-10.6 1.2-28.8-14.4-47.7-25.7-66.7-65.3-5-10.1 5-9.4 14.4-31.3 1.6-3.3.8-6.2-.4-8.7-1.2-2.5-11.1-26.7-15.2-36.6-4-9.7-8.1-8.3-11.1-8.5-2.9-.2-6.2-.2-9.5-.2s-8.7 1.2-13.2 6.2c-4.5 4.9-17.2 16.8-17.2 41 0 24.2 17.6 47.6 20.1 50.9 2.5 3.3 34.6 53 83.8 72.2 11.7 4.5 20.8 7.2 27.9 9.2 11.7 3.1 22.4 2.7 30.8 1.6 9.4-1.4 29-11.8 33.1-23.2 4.1-11.4 4.1-21.2 2.9-23.2-1.2-2-4.5-3.3-9.4-5.8z"
          fill="#fff"
        />
      </g>
    </svg>
  </a>
);

export default WhatsAppButton;
