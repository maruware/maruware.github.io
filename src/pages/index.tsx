import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../layouts'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Profile from '../components/index/Profile'
import TechStack from '../components/index/TechStack'
import Favorites from '../components/index/Favorites'

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  padding: ${props => props.theme.spacing.byUnit(2)};
`

const IndexPage: React.FC<IndexPageProps> = props => {
  const { siteName } = props.data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <title>{siteName}</title>
      </Helmet>

      <Container>
        <Profile />
        <Favorites />
        <TechStack />
      </Container>
    </Layout>
  )
}
export default IndexPage
