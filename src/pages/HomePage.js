import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque non dolorum fugit asperiores qui, inventore corrupti animi delectus. Eveniet consequatur possimus magni esse aspernatur animi ipsa iusto incidunt ratione nesciunt!",
  },
  {
    id: 2,
    title: "Czym jest paradoks Fermiego?",
    author: "Ania Kwiatkowska",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque non dolorum fugit asperiores qui, inventore corrupti animi delectus. Eveniet consequatur possimus magni esse aspernatur animi ipsa iusto incidunt ratione nesciunt!",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna enegria",
    author: "Piotr Kowalski",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque non dolorum fugit asperiores qui, inventore corrupti animi delectus. Eveniet consequatur possimus magni esse aspernatur animi ipsa iusto incidunt ratione nesciunt!",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
