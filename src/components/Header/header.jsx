import style from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.navbar}>
      <Link to="/">
        <img src={logo} alt="logo kasa" />
      </Link>
      <nav className={style.container}>
        <ul className={style.ulList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${style.listElement} ${isActive ? style.active : ""}`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? style.active : style.listElement
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
