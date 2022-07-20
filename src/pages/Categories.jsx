import React from "react";
import { useDispatch } from 'react-redux';
import { check } from '../redux/features/categories/categorySlice'
 
const Categories  = () => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(check)
    }
    return <button onClick={() => handleCheck()}> Check Status </button>
}

export default Categories;