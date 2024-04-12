import style from "./home.module.scss";
import bannerImage from "../../assets/images/IMG-src1.png";
import Banner from "../../components/Banner/banner";
import { accommodationsData } from "../../assets/data/logements";
import { Link } from "react-router-dom";
import Card from "../../components/Card/card";

const Home = () => {
  const data = accommodationsData;
  const shadowStyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="component">
      <Banner backgroundImage={bannerImage} otherStyle={shadowStyle}>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>

      <ul className={style.container}>
        {data.map((accommodation) => {
          return (
            <li key={accommodation.id} className={style.cards}>
              <Link to={`/accommodation/${accommodation.id}`}>
                <Card
                  accommodationTitle={accommodation.title}
                  cover={accommodation.cover}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
