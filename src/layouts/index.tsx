import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  spacing: {
    unit: '8px'
  }
}

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
`

const MainLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
)

export default MainLayout
