import BookCard from "./BookCard/BookCard";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div className={styles.Search}>
        <div className={styles.Search_Header}>
          <h1>Searching for a Book?</h1>
          <h3>libraryOfBooks holds an endless library to find what you need</h3>
        </div>
        <div className={styles.Search_Section}>
          <input
            className={styles.Search_Bar}
            type="text"
            placeholder="Search the book name here"
          ></input>
          <button className={styles.Search_Button}>Search</button>
        </div>
      </div>

      <div className={styles.BookCard}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </>
  );
};

export default MainPage;
