import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const Article = ({ data, pageContext }) => {
    const { markdownRemark } = data; // Destructure markdownRemark from data
    const { html, frontmatter } = markdownRemark; // Destructure html and frontmatter from markdownRemark
    const { id } = pageContext;

    console.log(id)
    return (
      <Layout>
        <div>
          <h1>{frontmatter.title}</h1>
          <p style={
            { 
            color: 'black', 
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "300"
            }}>{frontmatter.date}</p>
          {/* Render HTML content */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    );
  };

export default Article

export const Head = () => 
<title>Post | CNB Blog</title>


export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        slug
        date (formatString: "MMMM DD, YYYY")
      }
    }
  }
`