import React from 'react';

const listYear = (year, data) => (
  <div key={year}>
    <h2 id={year}>{year}</h2>
    <ul className="news__list">{data}</ul>
  </div>
);

export const parseYear = (date) => {
  const reYear = new RegExp(/(\d{4})/);
  return Number(date.match(reYear)[0]);
};

const formatNews = (articles) => {
  const articleData = [];
  let currentYear = parseYear(articles[0].date);
  let yearData = [];
  articles.forEach((article) => {
    const year = parseYear(article.date);
    if (year !== currentYear) {
      articleData.push(listYear(currentYear, yearData));
      yearData = [];
      currentYear = year;
    }
    yearData.push(
      <li key={`${article.title}-${article.date}`}>
        <time>{article.date}</time>
        <h3>{article.title}</h3>
        <p>{article.text}</p>
      </li>,
    );
  }, []);
  articleData.push(listYear(currentYear, yearData));

  return articleData;
};

export default formatNews;
