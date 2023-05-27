import React, { useEffect } from "react";

import "../styles/book.css";

import BookItem from "./BookItem";

interface BookListProps {
    type: string,
    setBook: (book: book) => void
}

const BookList = ({ type: string, setBook }: BookListProps) => {
    const temp: book = {
        "title": "테스트",
        "description": "테스트",
        "url": "https://i.namu.wiki/i/mBB_pv6YWA-7zFvQENFZqTjYx_OCkmtLjbXnBbRErtewnpC3Ow76lwgUwvhMWhIGl0ulQzR0nydP_My2NBU4GpHZ8-l8TWnPdqQiMChJcvwrhLkt1TSncncytpCuyiNmfw-nFBx-UByjuWmXG9Bf2A.webp",
        "id": 1,
        "author": "홍길동"
    }

    const [books, setBooks] = React.useState<book[]>([]);
    const bookItems = books.map((book) => {
        return <BookItem book={book} onClick={e => setBook(book)} />
    });

    useEffect(() => {
        setBooks([temp])
    }, [])

    return (
        <div className="book-wrapper">{bookItems}</div>
    );
}

export default BookList;