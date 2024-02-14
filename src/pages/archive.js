import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import "../styles/archive.css"

const Archive = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
        <Layout>
            <div className='archive'>
                <h1>Archive</h1>
                <ul className='list'>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id}>
                    <a href={`/blog${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </Layout>
    )}
  />
);

export default Archive;
