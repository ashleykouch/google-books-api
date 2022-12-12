import styles from "./HeaderContainer.module.scss";
import books from "../../assets/books.png";

// create a function for the website name and header logo

const HeaderLogo = () => {
  return (
    <div className={styles.Header}>
      <h2>libraryOfBooks</h2>
      <img className={styles.Header_Img} src={books} alt="books-logo" />
    </div>
  );
};

export default HeaderLogo;
