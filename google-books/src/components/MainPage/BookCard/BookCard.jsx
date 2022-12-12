import styles from "./BookCard.module.scss";

// create a card with placeholder styles to see what the card will look like
const BookCard = () => {
  return (
    <div className={styles.Card}>
      <img
        className={styles.Card_Img}
        src="https://m.media-amazon.com/images/I/51zXJBloNpL._AC_SY1000_.jpg"
        alt="book-"
      />
      <div className={styles.Card_Info}>
        <h2>Book Title</h2>
        <h3>Author</h3>
        <p>Short Description</p>
        <p>Price</p>
      </div>
    </div>
  );
};

export default BookCard;
