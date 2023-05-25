import React from "react";

interface MainListProps {
    tag: string;
}

const MainList = ({ tag }: MainListProps) => {
    return (
        <div>
        <h1>{tag}</h1>
        </div>
    );
}

export default MainList;