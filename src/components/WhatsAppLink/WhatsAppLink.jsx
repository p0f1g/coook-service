import "./WhatsAppLink.scss";

const WhatsAppLink = ({ href, className, children }) => {
  return (
    <a href={href} className="whatsapp-link" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default WhatsAppLink;
