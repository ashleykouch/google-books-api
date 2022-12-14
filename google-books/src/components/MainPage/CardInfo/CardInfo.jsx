import styles from "./CardInfo.module.scss";

const CardInfo = ({ index }) => {
  return (
    <div key={index} className={styles.CardInfo}>
      <div className={styles.CardInfo_Box}>
        <button className={styles.CardInfo_Box_Close}>X</button>
        <div className={styles.CardInfo_Img}>
          <img
            src="https://m.media-amazon.com/images/I/51zXJBloNpL._AC_SY1000_.jpg"
            alt="book"
          />
          <div className={styles.CardInfo_Box_Info}>
            <h1>Title</h1>
            <h3>Author</h3>
            <h4>Date</h4>
          </div>
        </div>
        <p className={styles.CardInfo_Box_Desc}> Description</p>
      </div>
    </div>
  );
};

export default CardInfo;
