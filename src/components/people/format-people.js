import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '../link/link';
import peopleList from './people-list';

const formatPeople = (images) => {
  // collect each distinct group label
  const groups = [...new Set(peopleList.map(p => p.group || ''))];

  return groups.map(group => (
    <section key={group} className="people__group-section">
      {/* render a header for this group */}
      {group && (
        <header className="people__group-header">
          <h2 className="people__section-title">{group}</h2>
        </header>
      )}

      {/* the grid of cards for this group */}
      <div className="people__grid">
        {peopleList
          .filter(p => (p.group || '') === group)
          .map(person => (
            <div key={person.name} className="people__card">
              <GatsbyImage
                image={person.file ? images[person.file] : images.user}
                alt={person.name}
              />

              <div className="people__card-content">
                <h2>{person.name}</h2>
                {person.title && <h3>{person.title}</h3>}
                {person.email && (
                  <Link nav to={`mailto:${person.email}`}>
                    {person.email}
                  </Link>
                )}
              </div>

              {person.blurb && (
                <div className="people__blurb">
                  {person.blurb}
                </div>
              )}
            </div>
        ))}
      </div>
    </section>
  ));
};

export default formatPeople;
