import React from "react"
import Book from "../components/Book"
import AddBook from "../components/AddBook"
import { useSelector, useDispatch } from "react-redux"

const Home = () => {
    const books = useSelector(state => state.book.value)
    return (
        <div>
           {books.map(book => <Book book={book} key={book.id} />)}
           <AddBook/>
        </div>
    )
}
export default Home