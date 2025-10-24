import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center border-t border-border py-4">
      <p>&copy; {new Date().getFullYear()} Mosfiqur Rahman.</p>
    </footer>
  );
};

export default Footer;
