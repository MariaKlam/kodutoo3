import React from "react";
import "./App.css";
import Book from "./Components/Book";
import pilt1 from "./Components/images/pilt1.jpg";
import pilt2 from "./Components/images/pilt2.jpg";
import pilt3 from "./Components/images/pilt3.jpg";

function App() {
  const book1 = {
    name: "Laws of UX: Using Psychology to Design Better Products & Services",
    autor: "Author: Jon Yablonski",
    kirjeldus:
      "An understanding of psychology—specifically the psychology behind how users behave and interact with digital interfaces—is perhaps the single most valuable nondesign skill a designer can have. The most elegant design can fail if it forces users to conform to the design rather than working within the blueprint of how humans perceive and process the world around them. This practical guide explains how you can apply key principles in psychology to build products and experiences that are more intuitive and human-centered. Author Jon Yablonski deconstructs familiar apps and experiences to provide clear examples of how UX designers can build experiences that adapt to how users perceive and process digital interfaces.",
    pilt: pilt1,
    aasta: "Published: 2020",
  };
  const book2 = {
    name: "JavaScript from Beginner to Professional",
    autor: "Authors: Laurence Lars Svekis, Maaike van Putten, Rob Percival",
    kirjeldus:
      "This book demonstrates the capabilities of JavaScript for web application development by combining theoretical learning with code exercises. The guiding principle is to show how straightforward JavaScript techniques can be used to make web apps ranging from dynamic websites to simple browser-based games.",
    pilt: pilt2,
    aasta: "Published: 2021",
  };

  const book3 = {
    name: "Responsive Web Design with HTML5 and CSS",
    autor: "Author: Ben Frain",
    kirjeldus:
      "Behind every great website is the fundamentals – HTML and CSS. Ben Frain covers the basics both clearly and logically. This is a solid book for anyone to get up to speed on coding and design quickly. This book is perfect for beginners and professionals with years of experience. The book concludes by exploring some exclusive tips for front-end development from the author.",
    pilt: pilt3,
    aasta: "Published: 2022",
  };

  const books = [book1, book2, book3];

  return (
    <div className="konteiner">
      {
        <ul className="BookList">
          <h1>Booklist:</h1>
          <li>
            {" "}
            {books.map((book, index) => (
              <Book
                key={index}
                bookName={book.name}
                autor={book.autor}
                aasta={book.aasta}
              />
            ))}
          </li>
        </ul>
      }
      <div className="Card">
        {books.map((book, index) => (
          <Book
            key={index}
            bookName={book.name}
            autor={book.autor}
            kirjeldus={book.kirjeldus}
            pilt={book.pilt}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
