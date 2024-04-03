import { useParams } from "react-router-dom";
import { accommodationsData } from "../../assets/data/logements";
import Error from "../error";
import Carousel from "../../components/Carousel/carousel";
import InfoCard from "../../components/InfoCard/infoCard";
import style from "./accommodation.module.scss";
import Collapse from "../../components/Collapse/collapse";

const Accommodation = () => {
  //state
  const { id } = useParams();
  const accommodation = accommodationsData.find((item) => item.id === id);
  const equipmentList = accommodation.equipments;

  //behavior

  if (!accommodation) {
    return <Error />;
  }

  //render
  return (
    <div className={style.component}>
      <Carousel accommodationData={accommodation} />
      <InfoCard title={accommodation.title} location={accommodation.location} />
      <div className={style.containerCollapses}>
        <Collapse title="Description">
          <p>{accommodation.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className={style.ulCollapse}>
            {equipmentList.map((item) => {
              return (
                <li key={item} className={style.collapseItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Accommodation;
