import style from "./card.module.scss";

function Card({ accomodationTitle, cover }) {
  return (
    <li className={style.cards} style={{ backgroundImage: `url(${cover})` }}>
      <p className={style.cardTitle}>{accomodationTitle}</p>
    </li>
  );
}

export default Card;
