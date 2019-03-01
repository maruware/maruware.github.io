import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../layouts'
import { Helmet } from 'react-helmet'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

const hello = 'hello'

const IndexPage: React.FC<IndexPageProps> = props => {
  const { siteName } = props.data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <title>{siteName}</title>
      </Helmet>
      <h1>{hello} Typescript world!</h1>
      <p>
        This site is named <strong>{siteName}</strong>
      </p>
    </Layout>
  )
}
export default IndexPage
