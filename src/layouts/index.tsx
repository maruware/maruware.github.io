import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
`

const MainLayout: React.FC = ({ children }) => <Container>{children}</Container>

export default MainLayout
