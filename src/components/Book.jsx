import React from "react";

const Book = (props) => {
    const {genre, title, producer } = props.book
    return (
        <div>
            <span>{genre}</span>
            <h2>{title}</h2>
            <span>{producer}</span>
            <button>Comments</button>
            <button>Remove</button>
            <button>Edit</button>
        </div>
    )
}


export default Book