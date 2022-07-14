import React from "react"
import { v4 as uuidv4} from 'uuid'
import Book from "../components/Book"
import AddBook from "../components/AddBook"

const books = [
    {
        id: uuidv4(),
        genre: "Action",
        title: "The Hunger Games",
        producer: "Suzanne Collins"
    },
    {
        id: uuidv4(),
        genre: "Science Fiction",
        title: "Dune",
        producer: "Suzanne Collins"
    },
    {
        id: uuidv4(),
        genre: "Economy",
        title: "Capital in the Twenty-First Century",
        producer: "Suzanne Collins"
    }
]

const Home = () => {
    return (
        <div>
           {books.map(book => <Book book={book} key={book.id} />)}
           <AddBook/>
        </div>
    )
}

export default Home