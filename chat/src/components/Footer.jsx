import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-secondary-800 border-t border-secondary-200 mt-12">
      <div className="container py-8 px-6 flex flex-wrap justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Mosfiqur Rahman.</p>
        <p className="flex gap-4">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
