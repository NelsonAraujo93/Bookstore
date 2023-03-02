import BooksList from './BooksList';
import NewBook from './NewBook';

function Books() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            boxSizing: 'border-box',
            padding: 40,
          }}
        >
          <BooksList />
          <NewBook />
        </section>
      </div>
    </>
  );
}

export default Books;
