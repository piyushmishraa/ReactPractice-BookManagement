import "./Catalogue.css";
import BookCard from "./BookCard.jsx";
import { useState } from 'react';
const Catalogue = ({ bookList, deleteB }) => {



    const [searchName, setSearchName] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchName(e.target.value);
    }

    const fl = bookList.filter((curr, idx) => {
        return curr.bookName.toLowerCase().includes(searchName.toLowerCase());
    })



    return (
        <>
            <h1>Catalogue</h1>
            <input type="text" placeholder="search your book" value={searchName} onChange={(e) => { handleSearch(e) }} />
            <div className="allcard">
                {fl.map((curr, idx) => {
                    return (
                        <BookCard key={idx} bookName={curr.bookName} author={curr.author} genre={curr.genre} remove={deleteB} />


                    )

                    console.log("ca")
                })}
            </div>

        </>
    )
}
export default Catalogue; 
