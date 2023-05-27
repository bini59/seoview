import React from "react";


import Book from "../Book";

interface MainListProps {
    tag: string;
}

const MainList = ({ tag }: MainListProps) => {
    const temp:book = {"title":"테스트","description":"테스트","url":"https://via.placeholder.com/150", "id":1, "author": "홍길동"};

    return (
        <div>
            <h1>{tag}</h1>
            <Book book={temp} />
        </div>
    );
}

export default MainList;