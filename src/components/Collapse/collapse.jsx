import style from "./collapse.module.scss";
import arrowUp from "../../assets/images/arrowUp.svg";
import { useState } from "react";

const Collapse = ({ title, children }) => {
  //state
  const [isClose, setIsClose] = useState(true);

  //behavior
  function toggleDisplay() {
    setIsClose(!isClose);
  }

  const collapseInfoClass = isClose ? style.hidden : "";
  const arrowRotationClass = isClose ? style.rotateUp : style.rotateDown;

  //render

  return (
    <div className={style.component}>
      <div className={style.containerOption}>
        <h3 className={style.title}>{title}</h3>
        <img
          className={`${style.arrow} ${arrowRotationClass}`}
          src={arrowUp}
          alt="menu"
          onClick={toggleDisplay}
        />
      </div>
      <div className={`${style.collapseInfo} ${collapseInfoClass}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
