import React from "react"
import { graphql } from "gatsby"

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          slug: string
          title: string
          date: string
        }
      }
    }[]
  }
}

type Props = {
  data: Data
}

const BlogIndex: React.FC<Props> = ({data}) => {
  return <div>
    {data.allMarkdownRemark.edges.map(edge => {
      const {slug, title, date} = edge.node.frontmatter
      return <a href={slug}>{date} {title}</a>
    })}
  </div>
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            slug
            title
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`

export default BlogIndex