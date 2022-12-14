import styles from "./BookCard.module.scss";
import CardInfo from "../CardInfo/CardInfo";

// create a card with placeholder styles to see what the card will look like
const BookCard = ({ books }) => {
  console.log(books);
  return (
    <>
      {books.map((data, index) => {
        let card =
          data.volumeInfo.imageLinks.smallThumbnail &&
          data.volumeInfo.imageLinks.smallThumbnail;

        if (card != undefined) {
          return (
            <div>
              <div key={index} className={styles.Card}>
                <img
                  className={styles.Card_Img}
                  src={
                    card ??
                    "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                  }
                  alt="book-"
                />
                <div className={styles.Card_Info}>
                  <h3 className={styles.Card_Title}>{data.volumeInfo.title}</h3>
                  <h4>{data.volumeInfo.authors}</h4>
                  <p className={styles.Card_Desc}>
                    {data.volumeInfo.description}
                  </p>
                  <p>
                    ${data.saleInfo?.listPrice?.amount ?? " No Price Available"}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default BookCard;
