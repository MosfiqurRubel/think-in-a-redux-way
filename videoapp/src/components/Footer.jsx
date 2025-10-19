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

{
  /* <section className="pt-6">
      <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
      >
        <div>Copyright 2022 Learn with Sumit.</div>
        <div>
          <a
            href="https://youtube.com/learnwithsumit"
            target="_blank"
            rel="noreferrer"
          >
            YouTube Channel
          </a>
        </div>
      </div>
    </section> */
}
