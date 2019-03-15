import React from 'react'
import styled from 'styled-components'
import TechItem from './TechItem'

const data = [
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
    name: 'kubernetes',
    logo: 'https://avatars1.githubusercontent.com/u/13629408?s=400&v=4'
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
      <h2>Current Tech Favorites</h2>
      <List>
        {data.map((tech, idx) => (
          <TechItem key={idx} name={tech.name} logo={tech.logo} />
        ))}
      </List>
    </Root>
  )
}

export default Favorites
