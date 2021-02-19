import React from 'react'
import styled from 'styled-components'
import TechItem from './TechItem'
import SubHeader from './SubHeader'

const data = [
  {
    name: 'Go',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/1280px-Go_Logo_Aqua.svg.png'
  },
  {
    name: 'Node.js',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
  },
  {
    name: 'TypeScript',
    logo: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png'
  },
  {
    name: 'AWS',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2000px-Amazon_Web_Services_Logo.svg.png'
  },
  {
    name: 'React',
    logo:
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
  }
]

interface FavoritesProps {}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing.byUnit(4)};
`

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <Root>
      <SubHeader>Current Tech Favorites</SubHeader>
      <List>
        {data.map((tech, idx) => (
          <TechItem key={idx} name={tech.name} logo={tech.logo} />
        ))}
      </List>
    </Root>
  )
}

export default Favorites
