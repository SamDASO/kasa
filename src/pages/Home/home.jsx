import style from "./home.module.scss";
import bannerImage from "../../assets/images/IMG-src1.png";
import Banner from "../../components/Banner/banner";
import { accommodationsData } from "../../assets/data/logements";
import { Link } from "react-router-dom";
import Card from "../../components/Card/card";

const Home = () => {
  const data = accommodationsData;

  return (
    <div className="component">
      <Banner backgroundImage={bannerImage}>
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
