import style from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";

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
