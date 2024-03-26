import style from "./card.module.scss";

function Card({ accommodationTitle, cover }) {
  return (
    <div className={style.cards} style={{ backgroundImage: `url(${cover})` }}>
      <p className={style.cardTitle}>{accommodationTitle}</p>
    </div>
  );
}

export default Card;
