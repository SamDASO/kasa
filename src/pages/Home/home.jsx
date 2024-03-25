import style from "./home.module.scss";
import bannerImage from "../../assets/images/IMG-src1.png";
import Banner from "../../components/Banner/banner";
import { accomodationsData } from "../../assets/data/logements";
import Card from "../../components/Card/card";

const Home = () => {
  const data = accomodationsData;

  return (
    <div className="component">
      <Banner backgroundImage={bannerImage}>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>

      <ul className={style.container}>
        {data.map((accomodation) => {
          return (
            <Card
              key={accomodation.id}
              accomodationTitle={accomodation.title}
              cover={accomodation.cover}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
