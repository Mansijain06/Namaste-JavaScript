import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.jpeg";
import "../../style.css";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center m-8">
      <img alt="Food Villa" src={Logo} className="h-16 w-20 " />
      <span>{user?.name}</span>
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
          <Link to="/instamart" className="mr-8">
            <li>Instamart</li>
          </Link>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
