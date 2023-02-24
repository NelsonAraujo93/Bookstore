import PropTypes from 'prop-types';
import Book from './Book';
import styles from '../styles/BooksList.module.css';

function BooksList(
  {
    booksData,
  },
) {
  return (
    <ul className={styles.bookList}>
      {
        booksData.map((item) => (
          <Book
            key={item.id}
            bookData={item}
          />
        ))
      }
    </ul>
  );
}

BooksList.defaultProps = {
  booksData: [],
};

BooksList.propTypes = {
  booksData: PropTypes.instanceOf(Array),
};

export default BooksList;
