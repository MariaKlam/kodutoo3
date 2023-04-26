import React from "react";
import "./App.css";
import Book from "./Components/Book";
import pilt1 from "./Components/images/pilt1.jpg";
import pilt2 from "./Components/images/pilt2.jpg";
import pilt3 from "./Components/images/pilt3.jpg";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    {
      heading:
        "Laws of UX: Using Psychology to Design Better Products & Services",
      author: " Author: Jon Yablonski",
      kirjeldus:
        "An understanding of psychology—specifically the psychology behind how users behave and interact with digital interfaces—is perhaps the single most valuable nondesign skill a designer can have. The most elegant design can fail if it forces users to conform to the design rather than working within the blueprint of how humans perceive and process the world around them. Author Jon Yablonski deconstructs familiar apps and experiences to provide clear examples of how UX designers can build experiences that adapt to how users perceive and process digital interfaces.",
      pilt: pilt1,
      year: "2020",
    },

    {
      heading: "JavaScript from Beginner to Professional",
      author: " Authors: Laurence Lars Svekis, Maaike van Putten, Rob Percival",
      kirjeldus:
        "This book demonstrates the capabilities of JavaScript for web application development by combining theoretical learning with code exercises. The guiding principle is to show how straightforward JavaScript techniques can be used to make web apps ranging from dynamic websites to simple browser-based games.",
      pilt: pilt2,
      year: "2021",
    },

    {
      heading: "Responsive Web Design with HTML5 and CSS",
      author: " Author: Ben Frain",
      kirjeldus:
        "Behind every great website is the basic fundamentals – HTML and CSS. Ben Frain covers the basics both clearly and logically. This is a solid book for anyone to get up to speed on coding and design quickly. This book is perfect for beginners just at the beginning  at their coding jounrney and also professionals with even years of experience. Pick up this book and code up!",
      pilt: pilt3,
      year: "2022",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const heading = event.target.heading.value;
    const author = event.target.author.value;
    const year = event.target.year.value;
    const kirjeldus = event.target.kirjeldus.value;

    const newBook = {
      heading: heading,
      author: author,
      year: year,
      kirjeldus: kirjeldus,
    };

    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="Vasak">
          <h5>Booklist</h5>
          <ul>
            {" "}
            <ul>
              {books.map((element) => (
                <li key={element.id}>
                  {element.heading}
                  {element.author}
                </li>
              ))}
            </ul>{" "}
          </ul>
          <form onSubmit={handleSubmit} className="addBook">
            <h5>Add a new Book</h5>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Heading</label>
              <input type="text" className="form-control" id="heading" />
              <label htmlFor="formGroupExampleInput2">Author</label>
              <input type="text" className="form-control" id="author" />
              <label htmlFor="formGroupExampleInput3">Year</label>
              <input type="text" className="form-control" id="year" />
              <label htmlFor="formGroupExampleInput4">Kirjeldus</label>
              <input type="text" className="form-control" id="kirjeldus" />
              <label htmlFor="formGroupExampleInput5">Pilt</label>
              <input type="file" className="form-control" id="pilt" />
              <input type="submit" className="addButton" />{" "}
            </div>
          </form>
        </div>
        <div className="Parem">
          {books.map((element) => {
            return (
              <Book
                key={element.id}
                heading={element.heading}
                author={element.author}
                year={element.year}
                kirjeldus={element.kirjeldus}
                pilt={element.pilt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
