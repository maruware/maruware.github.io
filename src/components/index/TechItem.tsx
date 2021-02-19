import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

export interface Tech {
  name: string
  logo: string
}

// TechItemRoot
const TechItemRoot = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing.byUnit(2)};
  @media (max-width: 576px) {
    margin: ${props => props.theme.spacing.byUnit(1)};
  }
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
  width: 100%;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.hover ? 0.2 : 1)};
  transition: opacity 0.5s;
`

// LogoContainer
const LogoContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
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

export default TechItem
