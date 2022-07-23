import React from "react";
import { remove, selectBooksById, deleteBook  } from "../redux/features/books/bookSlice";
import { useSelector, useDispatch } from 'react-redux'


const Book = ({id}) => {
    const book = useSelector( state => selectBooksById(state, id) )
    const dispatch = useDispatch()
    const {author, title, category} = book[0]
    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div>
            <span>{author}</span>
            <h2>{title}</h2>
            <span>{category}</span>
            <button>Comments</button>
            <button type='button' onClick={()=>handleDelete(id)}>Remove</button>
            <button>Edit</button>
        </div>
    )
}


export default Book