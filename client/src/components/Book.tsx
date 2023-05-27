import React from "react";

import "../styles/book.css";

interface Bookprops {
    book: book | null;
}

const Book = ({book}:Bookprops) => {
    return (
        <div className="book">
            <div className="book-img" style={{backgroundImage: `url("${book?.url}")`}} />
            <div className="book-info">
                <h1>{book?.title}</h1>
                <h4>{book?.author}</h4>
                <p>{book?.description}</p>
            </div>
        </div>
    );
}

export default Book;