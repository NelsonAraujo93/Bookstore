import BooksList from './BooksList';
import NewBook from './NewBook';

function getInitialTodos() {
  const books = [
    {
      id: '12asd52',
      name: 'This is my frist book',
      author: 'Nelson Araujo',
      lastChapter: '17',
      percent: '25',
      status: 'Completed',
    },
    {
      id: '12asd5222',
      name: 'This is not my first book',
      author: 'Araujo Araujo',
      lastChapter: '10',
      percent: '88',
      status: 'Completed',
    },
    {
      id: '1as2asd52',
      name: 'This is my Third book',
      author: 'Nelson Paredes',
      lastChapter: '3',
      percent: '77',
      status: 'Completed',
    },
  ];
  return books || [];
}

function BooksLogic() {
  const todos = getInitialTodos();
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <BooksList
        booksData={todos}
      />
      <NewBook />
    </section>
  );
}

export default BooksLogic;
