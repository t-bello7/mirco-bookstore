import React from "react";
import { selectBooksById, deleteBook  } from "../redux/features/books/bookSlice";
import { useSelector, useDispatch } from 'react-redux'
import './Book.css';

const Book = ({id}) => {
    const book = useSelector( state => selectBooksById(state, id) )
    const dispatch = useDispatch()
    const {author, title, category} = book[0]
    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div className="container book__container">
            <div >
                <span>{category}</span>
                <h2 >{title}</h2>
                <span className="book__author">{author}</span>

                <div className=" book__button flex">
                    <button>Comments</button>
                    <button type='button' onClick={()=>handleDelete(id)}>Remove</button>
                    <button>Edit</button>
                </div>
            </div>

            <div>
                64% completed
            </div>

            <div>
                <span style={{display: "block", textTransform:"uppercase"}}>current chapter</span>
                <span style={{display: "block"}}> Chapter 17</span>
                <button className="btn"> UPDATE PROGRESS </button>
            </div>
           
        </div>
    )
}


export default Book