import style from "./banner.module.scss";

function Banner({ backgroundImage, otherStyle, children }) {
  return (
    <div
      className={style.backgroundImage}
      style={{ backgroundImage: `url(${backgroundImage})`, ...otherStyle }}
    >
      <div className={style.backgroundFilter}></div>
      <div className={style.bannerContent}>{children}</div>
    </div>
  );
}

export default Banner;
