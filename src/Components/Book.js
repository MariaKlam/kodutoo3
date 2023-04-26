import "./Book.css";
import React from "react";
import Counter from "./Counter";

function Book(props) {
  return (
    <div className="card-container">
      <h2>{props.heading}</h2>

      <div className="autor">{props.author}</div>
      <div className="aasta">{props.year}</div>
      <div className="kirjeldus">{props.kirjeldus}</div>
      <img src={props.pilt} alt="" />
      <Counter />
    </div>
  );
}

export default Book;
