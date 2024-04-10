import Banner from "../../components/Banner/banner";
import Collapse from "../../components/Collapse/collapse";
import bannerImage from "../../assets/images/IMG-src2.png";
import style from "./about.module.scss";

const About = () => {
  return (
    <div className={style.component}>
      <Banner backgroundImage={bannerImage} />
      <div className={style.collapses}>
        <Collapse title="Fiabilité">
          <p className={style.collapsedContent}>
            Les annonces postées sur Kasa garantissent une Fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p className={style.collapsedContent}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p className={style.collapsedContent}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p className={style.collapsedContent}>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;
