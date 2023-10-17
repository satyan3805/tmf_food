import { Link } from "react-router-dom";

const NavItems = () => (
  <div className="nav-items">
    <ul>
      <li>
        <Link to="/home"> HOME </Link>
      </li>
      <li>
        <Link to="/about">ABOUT US </Link>
      </li>
      <li>
        <Link to="/contact"> CONTACT US</Link>
      </li>
      <li>CART</li>
    </ul>
  </div>
);

export default NavItems;
