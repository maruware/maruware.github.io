import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../layouts'
import styled from 'styled-components'
import { blue, grey } from '@material-ui/core/colors'

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        slug
        title
        image
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

type Data = {
  markdownRemark: {
    frontmatter: {
      title: string
      date: string
      image: string
    }
    html: string
  }
  site: {
    siteMetadata: {
      siteName: string
    }
  }
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: Data
}) {
  const { siteName } = data.site.siteMetadata
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const title = `${frontmatter.title} ${siteName} blog`

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Container>
        <ArticleTitle>{frontmatter.title}</ArticleTitle>
        <ArticleDate>{frontmatter.date}</ArticleDate>
        <ArticleContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

const Container = styled.main`
  padding: 64px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`
const ArticleTitle = styled.h1`
  font-size: 32px;
  color: ${grey[800]};
  font-weight: 700;
  margin-bottom: 1rem;
`

const ArticleDate = styled.div`
  font-size: 14px;
`

const ArticleContent = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  min-width: 640px;

  a {
    color: ${blue[700]};

    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    background-color: ${grey[200]};
    padding: 12px;
    max-width: 480px;
  }
`
