import React, {useEffect} from "react"
import Book from "../components/Book"
import AddBook from "../components/AddBook"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { selectAllBookIds, fetchBooks } from '../redux/features/books/bookSlice'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.value)
    const bookIds = Object.keys(books)
    const bookStatus = useSelector( state => state.books.status)
    useEffect(()=> {
        if (bookStatus === 'idle'){
            dispatch(fetchBooks())
        }
    }, [bookStatus])

    return (
        <div>
           {bookIds.map(bookId => <Book id={bookId} key={bookId} />)}
           <AddBook/>
        </div>
    )
}
export default Home