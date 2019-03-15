import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  spacing: {
    byUnit: (n: number) => `${n * 8}px`
  }
}

const Container = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
`

const MainLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
)

export default MainLayout
