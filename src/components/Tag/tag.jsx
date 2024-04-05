import style from "./tag.module.scss";

const Tag = ({ tagValue }) => {
  return (
    <li className={style.component}>
      <p className={style.tagText}>{tagValue}</p>
    </li>
  );
};

export default Tag;
