import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './assets/Form.jsx';
import Catalogue from './assets/Catalogue.jsx';

function App() {
    //as of right now we are able to create books with book name and author , but i want to add the genre in that aswell
    //what remains now 
    //--mamking the bookcard look a bit decent 
    //--searching functionality 
    //--deleting a particular book card
    const [books, setBooks] = useState([]);
    const addBooks = (newbook) => {

        setBooks(prev => [...prev, newbook]);

    }
    const deleteBook = (bookNametoBeDeleted) => {

        console.log("dletebookclikcked" + bookNametoBeDeleted);
        const newarr = books.filter((curr, idx) => {
            return curr.bookName !== bookNametoBeDeleted;
        })

        setBooks(newarr);
    }
    return (
        <>
            <div className="main">
                <h1>Books Management System</h1>
                <div className='page'>
                    <Form add={addBooks} />
                    <Catalogue bookList={books} deleteB={deleteBook} />

                </div>

            </div>
        </>
    )
}

export default App
