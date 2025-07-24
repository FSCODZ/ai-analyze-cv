import { Link } from "react-router";

type NavbarProps = {
  showOptions?: boolean;
  showUploadButton?:boolean;

};

const Navbar = ({ showOptions = true, showUploadButton = true }: NavbarProps) => {
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
        {showOptions && (
        <Link to="/howitworks" className="primary-button w-fit">
          How it works
        </Link>
      )}
      
    </nav>
  );
};

export default Navbar;
