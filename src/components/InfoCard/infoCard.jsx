import style from "./infoCard.module.scss";

const InfoCard = ({ title, location }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

export default InfoCard;
