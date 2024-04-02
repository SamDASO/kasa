import { useParams } from "react-router-dom";
import { accommodationsData } from "../../assets/data/logements";
import Error from "../error";
import Carousel from "../../components/Carousel/carousel";
import InfoCard from "../../components/InfoCard/infoCard";
import style from "./accommodation.module.scss";

const Accommodation = () => {
  //state
  const { id } = useParams();
  const accommodation = accommodationsData.find((item) => item.id === id);

  //behavior

  if (!accommodation) {
    return <Error />;
  }

  //render
  return (
    <div className={style.component}>
      <Carousel accommodationData={accommodation} />
      <InfoCard title={accommodation.title} location={accommodation.location} />
    </div>
  );
};

export default Accommodation;
