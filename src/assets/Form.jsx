import { useState } from 'react';
import './form.css';

const Form = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [singleBook, setSingleBook] = useState({});
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleName = (e) => {
        setBookName(e.target.value);
        console.log("handleaname ran");
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value);

        console.log("handleauthor ran");
    }

    const handleGenreChange = (e) => {
        e.preventDefault();
        setGenre(e.target.value);
    }

    const createNewBook = () => {
        const newBook = {
            bookName: bookName,
            author: author,
            genre: genre

        }
        setSingleBook(newBook);
        console.log(newBook.bookName);
        console.log(newBook.author);
        console.log("create new book")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookName.trim() || !author.trim() || !genre.trim()) {
            alert("Please enter all the fields");
            return;
        }

        props.add(singleBook);
        setBookName('');
        setAuthor('');
        setGenre('');
        setSingleBook({});


    }

    return (
        <>
            <div className='form' >
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <h3>Book submission form</h3>
                    <label>Enter Book name </label>
                    <input types='text' value={bookName} onChange={(e) => { handleName(e) }} />
                    <button onClick={(e) => handleToggle(e)}>Choose Genre</button>
                    {
                        isOpen && (
                            <select value={genre} onChange={(e) => handleGenreChange(e)}>
                                <option value="" disabled>-- Select a Genre --</option>
                                <option >Horror</option>
                                <option>Self help</option>
                                <option>Romantic</option>
                            </select>
                        )
                    }
                    <label> Enter Author name</label>
                    <input type='text' placeholder='name' value={author} onChange={(e) => { handleAuthor(e) }} />
                    <button type="submit" onClick={() => createNewBook()} >Add to Catalogue</button>
                </form>


            </div>
        </>
    )
}
export default Form;
