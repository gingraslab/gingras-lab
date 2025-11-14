import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Head from '../../components/head';
import Layout from '../../components/layout';

import formatAlumni from '../../components/people/format-alumni';
import formatPeople from '../../components/people/format-people';

import Camera from '../../images/icon/camera-retro.svg';
import Users from '../../images/icon/users.svg';
import UserFriends from '../../images/icon/user-friends.svg';

import './people.css';

export const query = graphql`{
  allFile(
    filter: {extension: {regex: "/(jpeg|jpg|png)/"}, relativeDirectory: {eq: "people"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 150, height: 200, formats: [JPG, WEBP], layout: FIXED, placeholder: BLURRED)
        }
        name
      }
    }
  }
  appreciationDay2018: file(relativePath: {eq: "group/2018-appreciation-day.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
  christmas2018: file(relativePath: {eq: "group/2018-christmas.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
  centerIsland2023: file(relativePath: {eq: "group/2023-center-island.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
  cherryPicking2023: file(relativePath: {eq: "group/2023-cherry-picking.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
  LTRIRetreat2023: file(relativePath: {eq: "group/2023-LTRI-retreat.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
  christmas2024: file(relativePath: {eq: "group/2024-christmas.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
  LTRIRetreat2025: file(relativePath: {eq: "group/2025-LTRI-retreat.jpg"}) {
    childImageSharp {
      gatsbyImageData(formats: [JPG, WEBP], layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
}
`;

const People = ({ data }) => {
  const images = data.allFile.edges.reduce((accum, edge) => ({
    ...accum,
    [edge.node.name]: edge.node.childImageSharp.gatsbyImageData,
  }), {});

  return (
    <Layout>
      <Head
        description="Meet the members of the laboratory of Dr. Anne-Claude Gingras."
        title="People"
      />
      <div className="people">
        <section>
          <header>
            <h1>
              People
            </h1>
            <img
              alt="Group of people"
              height="25"
              src={Users}
            />
          </header>
          <div className="people__grid">
            {formatPeople(images)}
          </div>
        </section>
        <section>
          <header>
            <h1>
              Lab photos
            </h1>
            <img
              alt="Camera"
              height="25"
              src={Camera}
            />
          </header>
          <div className="people__photos">
            <figure className="LTRI-retreat-2025">
              <GatsbyImage
                image={data.LTRIRetreat2025.childImageSharp.gatsbyImageData}
                alt="LTRI Retreat 2025" />
              <figcaption>LTRI Retreat, 2025.</figcaption>
            </figure>
            <figure className="christmas-2024">
              <GatsbyImage
                image={data.christmas2024.childImageSharp.gatsbyImageData}
                alt="Christmas party, 2024" />
              <figcaption>Christmas party, 2024.</figcaption>
            </figure>
            <figure className="LTRI-retreat-2023">
              <GatsbyImage
                image={data.LTRIRetreat2023.childImageSharp.gatsbyImageData}
                alt="LTRI Retreat 2023" />
              <figcaption>LTRI Retreat, 2023.</figcaption>
            </figure>
            <figure className="cherry-picking-2023">
              <GatsbyImage
                image={data.cherryPicking2023.childImageSharp.gatsbyImageData}
                alt="Cherry Picking 2023" />
              <figcaption>Cherry Picking, 2023.</figcaption>
            </figure>
            <figure className="center-island-2023">
              <GatsbyImage
                image={data.centerIsland2023.childImageSharp.gatsbyImageData}
                alt="Center Island 2023" />
              <figcaption>Center Island, 2023.</figcaption>
            </figure>
            <figure className="appreciation-day-2018">
              <GatsbyImage
                image={data.appreciationDay2018.childImageSharp.gatsbyImageData}
                alt="Staff appreciation day, 2018" />
              <figcaption>Staff appreciation day, 2018.</figcaption>
            </figure>
            <figure className="christmas-2018">
              <GatsbyImage
                image={data.christmas2018.childImageSharp.gatsbyImageData}
                alt="Christmas party, 2018" />
              <figcaption>Christmas party, 2018.</figcaption>
            </figure>
          </div>
        </section>
        <section>
          <header>
            <h1>
              Alumni
            </h1>
            <img
              alt="Two people, one standing in front of the other"
              height="25"
              src={UserFriends}
            />
          </header>
          <div className="people__alumni">
            {formatAlumni()}
          </div>
        </section>
      </div>
    </Layout>
  );
};


People.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.shape({}).isRequired,
            }).isRequired,
            name: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    appreciationDay2018: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    christmas2018: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    centerIsland2023: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    cherryPicking2023: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    LTRIRetreat2023: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    christmas2024: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    LTRIRetreat2025: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};


export default People;
