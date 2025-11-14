import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import Link from '../../components/link/link';

import formatNews from '../../components/news/format-news';
import news from '../../components/news/news-list';
import NewsYears from '../../components/news/news-years';

import NewsPaper from '../../images/icon/newspaper.svg';
import UserSearch from '../../images/icon/user-search.svg';

import './news.css';

const News = () => (
  <Layout>
    <Head
      description="Read the latest news from the laboratory of Dr. Anne-Claude Gingras."
      title="News"
    />
    <div className="news">
      <section id="openings">
        <header>
          <h1>Open positions</h1>
          <img
            alt="Magnifying glass searching for a person"
            height="25"
            src={UserSearch}
          />
        </header>
        {/* <h2>Active listings</h2>
        <ul>
          <li>
            <Link to="https://apply.interfolio.com/100181">
              Bioinformatician / Data Analyst, 1 year contract
            </Link>
            : Database design and management and data visualization are your strengths? Join our serology
            team to process, analyze and visualize antibody data for dozens of important COVID-19 projects
          </li>
        </ul> */}
        <h2>Postdocs</h2>
        <p>
          The laboratory is always interested in recruiting highly motivated postdoctoral fellows
          with a strong publication record in signal transduction, cell biology, biochemistry,
          bioinformatics and/or proteomics. Please forward your CV, references and research
          interests to
          {' '}
          <Link nav to="mailto:gingras@lunenfeld.ca">Dr. Anne-Claude Gingras</Link>
          .
        </p>
        <h2>Graduate students</h2>
        <p>
          The Gingras lab is part of the
          {' '}
          <Link to="http://www.moleculargenetics.utoronto.ca/">Department of Molecular Genetics</Link>
          {' '}
          at the
          {' '}
          <Link to="https://www.utoronto.ca/">University of Toronto</Link>
          , which has a central admission committee and a rotation system. Graduate students
          interested in doing a PhD in the laboratory must first be accepted in the Department
          of Molecular Genetics.
        </p>
        <h2>Summer students</h2>
        <p>
          Summer students are exclusively selected from successful applicants to the
          {' '}
          <Link to="https://research.lunenfeld.ca/rtc/">Research Training Center (RTC)</Link>
          {' '}
          at the Lunenfeld-Tanenbaum Research Institute.
          {' '}
          <Link to="https://research.lunenfeld.ca/rtc/?page=Summer%20Research%20Program">Applications</Link>
          {' '}
          are available online and need to be filled by February 28th.
        </p>
      </section>
      <section className="news__articles">
        <header>
          <h1>
            News
          </h1>
          <img
            alt="Newspaper"
            height="25"
            src={NewsPaper}
          />
        </header>
        <NewsYears articles={news} />
        {formatNews(news)}
      </section>
    </div>
  </Layout>
);

export default News;
