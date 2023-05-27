import React from "react";


import Book from "../Book";
import BookList from "../BookList";

interface MainListProps {
    tag: string;
}

const MainList = ({ tag }: MainListProps) => {

    const [selectedBook, setSelectedBook] = React.useState<book | null>(null);

    return (
        <div>
            <h1>{tag}</h1>
            <Book book={selectedBook} />
            <BookList type="temp" setBook={setSelectedBook}/>
        </div>
    );
}

export default MainList;