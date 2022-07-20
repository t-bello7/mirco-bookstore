import React, { useEffect } from "react";
import { remove } from "../redux/features/books/bookSlice";
import { useDispatch } from 'react-redux'

const Book = (props) => {
    const dispatch = useDispatch()
    const {id,genre, title, producer } = props.book
    
    const handleDelete = (id) => {
        
        // useEffect(()=>{
            dispatch(remove(id))
        // },[])
    }
    return (
        <div>
            <span>{genre}</span>
            <h2>{title}</h2>
            <span>{producer}</span>
            <button>Comments</button>
            <button type='button' onClick={()=>handleDelete(id)}>Remove</button>
            <button>Edit</button>
        </div>
    )
}


export default Book