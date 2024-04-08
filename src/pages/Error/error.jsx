import { Link } from "react-router-dom";
import style from "./error.module.scss";

const Error = () => {
  return (
    <div className={style.component}>
      <h1 className={style.title}>404</h1>
      <h2 className={style.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className={style.linkHome}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
