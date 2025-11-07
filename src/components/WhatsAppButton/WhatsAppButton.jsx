import React from "react";

const whatsappNumber = "+5511970943345";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

const buttonStyle = {
  position: "fixed",
  right: "24px",
  bottom: "88px", // Deixa o botão mais acima para não obstruir o botão de voltar ao topo
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
  padding: 0,
};

const iconStyle = {
  width: "28px",
  height: "28px",
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
    <img
      src="/whatsapp .svg"
      alt="WhatsApp"
      style={iconStyle}
      draggable="false"
    />
  </a>
);

export default WhatsAppButton;
