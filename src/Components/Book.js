import "./Book.css";

function Book(props) {
  return (
    <div className="card-container">
      <h1>{props.bookName}</h1>
      <div className="autor">{props.autor}</div>
      <div className="kirjeldus">{props.kirjeldus}</div>
      <img src={props.pilt} alt="" />
      <div className="aasta">{props.aasta}</div>
    </div>
  );
}

export default Book;
