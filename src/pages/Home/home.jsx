import style from "./home.module.scss";
import bannerImage from "../../assets/images/IMG-src1.png";
import Banner from "../../components/Banner/banner";
import { accomodationsData } from "../../assets/data/logements";

const Home = () => {
  const data = accomodationsData;

  return (
    <div className="component">
      <Banner backgroundImage={bannerImage}>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>

      <ul className={style.container}>
        {data.map((accomodation) => {
          const cover = accomodation.cover;
          return (
            <li
              className={style.cards}
              key={accomodation.id}
              style={{ backgroundImage: `url(${cover})` }}
            >
              <p className={style.cardTitle}>{accomodation.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
