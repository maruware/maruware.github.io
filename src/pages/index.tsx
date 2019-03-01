import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../layouts'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Profile from './index/Profile'
import TechStack, { Tech } from './index/TechStack'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
    allTechStackYaml: {
      edges: {
        node: Tech
      }[]
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
    allTechStackYaml {
      edges {
        node {
          name
          logo
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IndexPage: React.FC<IndexPageProps> = props => {
  const { siteName } = props.data.site.siteMetadata
  const techStack = props.data.allTechStackYaml.edges.map(e => e.node)
  return (
    <Layout>
      <Helmet>
        <title>{siteName}</title>
      </Helmet>

      <Container>
        <Profile />
        <TechStack techStack={techStack} />
      </Container>
    </Layout>
  )
}
export default IndexPage
