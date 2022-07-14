import React from "react";

const AddBook = () => {
    return (
        <form>
            <h3> Add New Book    </h3>
            <label >
                <input type="text" placeholder="Book Title" />
            </label>
            <label>
                <select name="category">
                    <option value="mercedes">Category</option>
                </select>
            </label>
            <button type="submit">Add Book</button>
        </form>
    )
}

export default AddBook