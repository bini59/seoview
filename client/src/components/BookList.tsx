import React, { useEffect } from "react";

import "../styles/book.css";

import BookItem from "./BookItem";
import axios from "axios";

interface BookListProps {
    type: string,
    setBook: (book: book) => void
}

const BookList = ({ type, setBook }: BookListProps) => {
    const [books, setBooks] = React.useState<book[]>([]);
    const bookItems = books.map((book) => {
        return <BookItem book={book} onClick={e => setBook(book)} />
    });

    useEffect(() => {
        type = type == "all" ? "" : type
        axios.get("http://localhost:3001/api/books/" + type).then((res) => {
            console.log(res.data)
            var values = res.data.data.map((book:any) => {
                return {
                    id: book.id,
                    title: book.title,
                    description: book.description,
                    url: "http://localhost:3001/images/books/"+book.image,
                    author: book.author,
                }
            });
            setBooks(values);
        });
        
    }, [type])

    return (
        <div className="book-wrapper">{bookItems}</div>
    );
}

export default BookList;