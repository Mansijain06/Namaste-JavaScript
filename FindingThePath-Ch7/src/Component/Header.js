import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpeg";
import "../../style.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt="Food Villa" src={Logo} />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
