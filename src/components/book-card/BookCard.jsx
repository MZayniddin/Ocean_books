import React from "react";
import { Link } from "react-router-dom";
import c from "./BookCard.module.css";

const BookCard = ({ name, author, year, language, image }) => {
  const whichLangBook = text => {
    if(text === "EN"){
      return "English"
    }else if (text === "RU"){
      return "Russian"
    }else {
      return "O'zbekcha"
    }
  }
  return (
    <div className={c["book-card"]}>
      <Link to="/">
        <img
          src={image}
          alt="This is cover of book"
          className={c["book-card-img"]}
        />
      </Link>
      <h2 className={c["book-card-title"]}>{name}</h2>
      <div className={c["book-card-about"]}>
        <ul>
          <li>
            <strong>Avtor:</strong> {author}
          </li>
          <li>
            <strong>Yili:</strong> {year}
          </li>
          <li>
            <strong>Tili:</strong> {whichLangBook(language)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCard;