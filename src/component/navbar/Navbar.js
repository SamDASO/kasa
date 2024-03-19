import "./navbar.scss";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <a href="/home" id="navbar-logo">
        <img src={logo} alt="logo kasa" />
      </a>
      <ul id="navbar-list">
        <li id="navbar-accueil" className="navbar-list-li">
          Accueil
        </li>
        <li id="navbar-apropos" className="navbar-list-li">
          A propos
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
