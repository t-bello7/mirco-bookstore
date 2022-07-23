import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/features/books/bookSlice';
import { v4 as uuidv4 } from 'uuid';
import './AddBook.css'


const AddBook = () => {
    const dispatch = useDispatch()
    const [formInput, setFormInput] = useState({
        item_id: uuidv4(),
        title: "",
        category: "",
        author: ""
    });
    const [addRequestStatus, setAddRequestStatus] = useState('idle')


    const handleChange = e => {
        const value = e.target.value;
        setFormInput({
            ...formInput,
            [e.target.name] : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!formInput.title || !formInput.category || !formInput.author){
            return
        }
        try{
            setAddRequestStatus('pending')
            await dispatch(addNewBook(formInput)).unwrap()
        } catch (err) {
            console.error('Failed to save the post:', err)
        } finally {
            setFormInput({
                item_id: uuidv4(),
                title: "",
                category:"",
                author:""
            })
            setAddRequestStatus('idle')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container add__container">
            <h3> Add New Book    </h3>
            <div className="flex">
                <label htmlFor="title">
                    <input type="text" placeholder="Book Title" name="title" value={formInput.title} onChange={handleChange} className="add__input title"/>
                </label>
                <label htmlFor="author">
                    <input type="text" placeholder="Book Author" name="author" value={formInput.author} onChange={handleChange} className="add__input"/>
                </label>
                <label htmlFor="category">
                    <select name="category" value={formInput.category} onChange={handleChange} className="add__input">
                        <option value=""></option>
                        <option key="economy" value="economy">Economy</option>
                        <option key="action" value="action">Action</option>
                        <option key="science-fiction" value="science-fiction">Science Fiction</option>
                    </select>
                </label>
                <button className="btn" type="submit">Add Book</button>
            </div>
        </form>
    )
}

export default AddBook