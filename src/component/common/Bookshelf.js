import React from 'react'
import BookEntry from '../books/BookEntry'

class Bookshelf extends React.Component {
  state = {
    newBooks: [{ title: 'weast', id: 1 }, { title: 'book', id: 2 }],
    oldBooks: [{ title: 'new book', id: 3 }, { title: 'sass', id: 4 }],
  }

  render() {
    return (
      <section className='wrapper'>
        <div className='side-shelving'></div>
        <div className='shelving'></div>
        <div className='side-shelving1'></div>
        <h1>Background render</h1>
        <div className='shelving'></div>
        <div className='shelf'>
          { this.state.oldBooks.map(book => (
            < BookEntry key={book.id} {...book} />
          ))}
        </div>
        <div className='shelving'></div>
        <div className='shelf'>
          { this.state.newBooks.map(book => (
            < BookEntry key={book.id} {...book} />
          ))}
        </div>
        <div className='shelving'></div>
      </section>
    )
  }
}

export default Bookshelf