import style from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className={style.component}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
