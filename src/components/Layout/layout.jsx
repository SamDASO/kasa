import style from "./layout.module.scss";
import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import { Outlet, NavLink, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className={style.component}>
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
                  isActive ? style.active : style.listElement
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
      <Outlet />
      <footer className={style.footer}>
        <div className={style.containerFooter}>
          <img src={logoWhite} alt="logo kasa" />
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
