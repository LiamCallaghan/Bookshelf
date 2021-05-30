import React from 'react'

class Bookshelf extends React.Component {
  state = {
    newBooks: null,
    oldBooks: null
  }

  render() {
    return (
      <section className='wrapper'>
        <div className='side-shelving'></div>
        <div className='shelving'></div>
        <div className='side-shelving1'></div>
        <h1>Background render</h1>
        <div className='shelving'></div>
        <h1>Books</h1>
        <div className='shelving'></div>
        <h1>Last line</h1>
        <div className='shelving'></div>
      </section>
    )
  }
}

export default Bookshelf