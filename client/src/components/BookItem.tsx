import React from "react";

interface BookItemProps {
    book: book,
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const BookItem = ({ book: book, onClick }:BookItemProps) => {
    return (
        <div className="book-item" draggable={false} onClick={onClick}>
            <div className="book-item-img" style={{backgroundImage:`url(${book.url})`}} />
            <div className="book-item-info">
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
            </div>
        </div>
    );
}

export default BookItem;