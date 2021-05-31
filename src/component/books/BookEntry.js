import React from 'react'

const BookEntry = ({ title, id }) => {
  return (
    <div id={id} className='book-spine'>
      <h4 className='book-text'>{title}</h4>
    </div>
  )
}

export default BookEntry