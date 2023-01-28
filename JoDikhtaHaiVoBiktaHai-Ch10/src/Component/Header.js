import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpeg";
import "../../style.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-8">
      <img alt="Food Villa" src={Logo} className="h-16 w-20 " />
      <div className="nav-items">
        <ul className="flex  text-purple-500">
          <Link to="/" className="mr-8">
            <li>Home</li>
          </Link>
          <Link to="/about" className="mr-8">
            <li>About</li>
          </Link>
          <Link to="/contact" className="mr-8">
            <li>Contact Us</li>
          </Link>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
