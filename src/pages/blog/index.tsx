import React from 'react'
import { graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from '../../layouts'
import { blue, grey } from '@material-ui/core/colors'
import {
  Card as _Card,
  CardActionArea,
  CardMedia as _CardMedia,
  CardContent,
} from '@material-ui/core'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
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
            image
          }
        }
      }
    }
  }
`

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          slug: string
          title: string
          date: string
          image: string
        }
      }
    }[]
  }
  site: {
    siteMetadata: {
      siteName: string
    }
  }
}

type Props = {
  data: Data
}

const BlogIndex: React.FC<Props> = ({ data }) => {
  const { siteName } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <title>{siteName} blogs</title>
      </Helmet>
      <Content>
        <Header>
          <Title>blog</Title>
        </Header>
        <Main>
          {data.allMarkdownRemark.edges.map(edge => {
            const { slug, title, date, image } = edge.node.frontmatter
            const handleClick = () => {
              navigate(slug)
            }
            return (
              <Article>
                <Card>
                  <CardActionArea onClick={handleClick}>
                    {image && <CardMedia component="img" image={image} />}
                    <CardContent>
                      <ArticleTitle>{title}</ArticleTitle>
                      <ArticleDate>{date}</ArticleDate>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Article>
            )
          })}
        </Main>
      </Content>
    </Layout>
  )
}

export default BlogIndex

const Content = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${blue[500]};
  }
`

const Header = styled.header`
  padding-top: 64px;
  padding-bottom: 32px;
`

const Title = styled.h1`
  font-size: 24px;
`

const Main = styled.main``

const Article = styled.div`
  margin-bottom: 24px;
`
const ArticleTitle = styled.h3`
  color: ${grey[700]};
`
const ArticleDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 12px;
`

const Card = styled(_Card)`
  width: 480px;
`

const CardMedia = styled(_CardMedia)`
  height: 240px;
  object-fit: cover;
`
