import React from 'react';

    function BookSection({ bookCover }) {
      return (
        <div className="book-section">
          <img src={bookCover} alt="Book Cover" className="book-cover" />
          <a href="https://www.amazon.com/dp/B0F2MXLR8B" className="buy-button">Buy on Amazon</a>
        </div>
      );
    }

    export default BookSection;
