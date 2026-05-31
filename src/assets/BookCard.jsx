import "./BookCard.css";
const BookCard = (props) => {

    const handleClick = (e) => {
        props.remove(props.bookName);

    }

    return (
        <>
            <div className="bookcard">
                <h1>{`${props.bookName}`}</h1>
                <p>{`Author Name :${props.author}`} </p>
                <p> {`genre:${props.genre}`}  </p>
                <button onClick={(e) => handleClick(e)}>Click me </button>
            </div>

        </>
    )
}
export default BookCard;
