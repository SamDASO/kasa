import bannerImage from "../assets/images/IMG-src1.png";
import Banner from "../components/Banner/banner";

const Home = () => {
  return (
    <div className="component">
      <Banner backgroundImage={bannerImage}>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>
    </div>
  );
};

export default Home;
