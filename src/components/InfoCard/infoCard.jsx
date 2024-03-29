import Tag from "../Tag/tag";
import style from "./infoCard.module.scss";
import { accommodationsData } from "../../assets/data/logements";
import { useParams } from "react-router-dom";

const InfoCard = ({ title, location }) => {
  const { id } = useParams();
  const accommodation = accommodationsData.find((item) => item.id === id);
  const tagsList = accommodation.tags;
  const hostName = accommodation.host.name;
  const picture = accommodation.host.picture;

  return (
    <div className={style.container}>
      <div className={style.mainInfo}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.location}>{location}</p>
        <ul className={style.tagContainer}>
          {tagsList.map((tag, index) => (
            <Tag key={index} tagValue={tag} />
          ))}
        </ul>
      </div>
      <div className={style.hostInfo}>
        <div className={style.name}>{hostName}</div>
        <div
          className={style.hostPicture}
          style={{ backgroundImage: `url(${picture})` }}
        ></div>
        <div className={style.rating}></div>
      </div>
    </div>
  );
};

export default InfoCard;
