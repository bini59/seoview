import React from "react";


import Book from "../Book";
import BookList from "../BookList";

interface MainListProps {
    tag: string;
}

const tagToType = (tag:string)=>{
    switch (tag) {
        case "베스트셀러":
            return "Bestseller";
        case "신간":
            return "ItemNewAll";
        case "서적 목록":
            return "all";
        default:
            return "all";
    }

}

const MainList = ({ tag }: MainListProps) => {

    const [selectedBook, setSelectedBook] = React.useState<book | null>(null);

    return (
        <div>
            <h1 style={{"paddingLeft": "50px", "display": "flex"}}>{tag}</h1>
            <Book book={selectedBook} />
            <BookList type={tagToType(tag)} setBook={setSelectedBook}/>
        </div>
    );
}

export default MainList;