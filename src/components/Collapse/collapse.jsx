import style from "./collapse.module.scss";
import arrowUp from "../../assets/images/arrowUp.svg";

const Collapse = ({ title, children }) => {
  //state
  //behavior
  //render

  return (
    <div className={style.component}>
      <div className={style.containerOption}>
        <h3 className={style.title}>{title}</h3>
        <img className={style.arrowUp} src={arrowUp} alt="menu fermé" />
      </div>
      <div className={style.collapseInfo}>{children}</div>
    </div>
  );
};

export default Collapse;
