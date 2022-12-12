import BookCard from "./BookCard/BookCard";
import styles from "./MainPage.module.scss";
import { useState } from "react";
import axios from "axios";
import CardInfo from "./CardInfo/CardInfo";

const MainPage = ({ index }) => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${search}+terms`)
        .then((response) => setBookData(response.data.items))
        .catch((error) => console.log(error));
    }
  };

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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={searchBook}
          ></input>
          <button className={styles.Search_Button}>Search</button>
        </div>
      </div>

      <div className={styles.BookCard}>{<BookCard books={bookData} />}</div>
    </>
  );
};

export default MainPage;
