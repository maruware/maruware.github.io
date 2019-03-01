import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

export interface Tech {
  name: string
  logo: string
}

interface TechStackProps {
  techStack: Tech[]
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// TechItemRoot
const TechItemRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`

// Logo

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hover: boolean
}
const _Logo: React.FC<LogoProps> = props => <img {...props} />
const Logo = styled(_Logo)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.hover ? 0.2 : 1)};
  transition: opacity 0.5s;
`

// LogoContainer
const LogoContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`

const TechName = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  font-size: 16pt;
`

// TechItem

interface TechItemProps extends Tech {}
const TechItem: React.FC<TechItemProps> = ({ name, logo }) => {
  const [hover, setHover] = useState(false)
  const handleMouseEnter = useCallback(() => {
    setHover(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setHover(false)
  }, [])

  return (
    <TechItemRoot
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LogoContainer>
        <Logo src={logo} hover={hover} />
        {hover && <TechName>{name}</TechName>}
      </LogoContainer>
    </TechItemRoot>
  )
}

const Root = styled.div``

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <Root>
      <h2>Tech Stack</h2>
      <List>
        {techStack.map((tech, idx) => (
          <TechItem key={idx} name={tech.name} logo={tech.logo} />
        ))}
      </List>
    </Root>
  )
}

export default TechStack
