import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { grey } from '@material-ui/core/colors'

const theme = {
  spacing: {
    byUnit: (n: number) => `${n * 8}px`
  },
  palette: {
    text: {
      default: grey[700]
    }
  }
}

const Container = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;
  margin: 0 auto;
  background-color: ${grey[50]};
  min-height: 100vh;
  color: ${grey[700]};
`

const MainLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
)

export default MainLayout
