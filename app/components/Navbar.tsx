import { Link } from "react-router";

type NavbarProps = {
  showUploadButton?: boolean;
};

const Navbar = ({ showUploadButton = true }: NavbarProps) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      {showUploadButton && (
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
