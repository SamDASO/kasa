import style from "./footer.module.scss";
import logoWhite from "../../assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.containerFooter}>
        <img src={logoWhite} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
