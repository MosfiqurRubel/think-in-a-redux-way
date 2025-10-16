import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-background text-heading border-t border-border mt-12">
      <div className="container py-8 px-6 flex flex-wrap justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Mosfiqur Rahman. All rights
          reserved.
        </p>
        <p className="flex gap-4">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
