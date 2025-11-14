// get years from each news, return a sorted list. Replace the manually input years in index.js
import React from 'react';
import { Link } from 'gatsby';
import { parseYear } from './format-news';

const newsYears = ({ articles }) => {
  // grab each year, dedupe, sort descending
  const years = Array.from(
    new Set( articles.map(a => parseYear(a.date)) )
  ).sort((a, b) => b - a);

  return (
    <div className="news__years">
      {years.map(year => (
        <Link key={year} to={`/news/#${year}`}>
          {year}
        </Link>
      ))}
    </div>
  );
};

export default newsYears;
