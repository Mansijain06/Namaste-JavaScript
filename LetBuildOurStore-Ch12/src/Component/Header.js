import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../style.css";
import Logo from "../assets/img/logo.jpeg";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store?.cart?.items);
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
          <li>cart - {cartItems.length}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
