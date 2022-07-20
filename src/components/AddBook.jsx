import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { add } from '../redux/features/books/bookSlice';

const AddBook = () => {
    const dispatch = useDispatch()
    const [formInput, setFormInput] = useState({
        title: "",
        category: ""
    });

    const handleChange = e => {
        const value = e.target.value;
        setFormInput({
            ...formInput,
            [e.target.name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formInput.title || !formInput.category){
            return
        }
        dispatch(add(formInput))
        setFormInput({
            title: "",
            category:""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3> Add New Book    </h3>
            <label for="title">
                <input type="text" placeholder="Book Title" name="title" value={formInput.title} onChange={handleChange}/>
            </label>
            <label for="name">
                <select name="category" value={formInput.category} onChange={handleChange}>
                    <option value="economy">Economy</option>
                    <option value="action">Action</option>
                    <option value="science-fiction">Science Fiction</option>
                </select>
            </label>
            <button type="submit">Add Book</button>
        </form>
    )
}

export default AddBook