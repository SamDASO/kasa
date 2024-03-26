import { useParams } from "react-router-dom";
import { accommodationsData } from "../assets/data/logements";
import Error from "./error";
import Carousel from "../components/Carousel/carousel";

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
    <div className="component">
      <Carousel />
      <p>{id}</p>
    </div>
  );
};

export default Accommodation;
