import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerItems } from "../utils/data";
export const Footer = () => {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center">
      {footerItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.text}
        >
          <FontAwesomeIcon icon={item.icon} />
          {item.text}
        </a>
      ))}
    </footer>
  );
};
