const path = require(`path`)


exports.createPages = async ({ actions, graphql, reporter}) => {
    const { createPage } = actions
    
    const postTemplate = path.resolve(`src/pages/blog/{MarkdownRemark.frontmatter__slug}.js`)

    const result = await graphql(` 
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/blog${node.frontmatter.slug}`,
            component: postTemplate,
            context: {
                id: node.id
            }
          })
    })
}