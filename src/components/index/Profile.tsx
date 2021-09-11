import * as React from 'react'
import styled from 'styled-components'

import profileImage from './maruware.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { grey } from '@material-ui/core/colors'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.byUnit(2)};
`

const ProfileImage = styled.img`
  border-radius: 8px;
  width: 160px;
  height: 160px;
  margin: ${props => props.theme.spacing.byUnit(1)};
`

const ProfileName = styled.h2`
  font-weight: 800;
  color: inherit;
`

const ProfileDesc = styled.p`
  font-size: 16px;
  color: inherit;
`

const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: ${grey[900]};
  }
  color: ${grey[500]};
  margin: ${props => props.theme.spacing.byUnit(1)};
`
interface IconLinkProps {
  url: string
  icon: IconDefinition
}
const IconLink: React.FC<IconLinkProps> = ({ url, icon }) => {
  return (
    <Link href={url} target="_blank">
      <FontAwesomeIcon icon={icon} size="2x" />
    </Link>
  )
}

const IconsContainer = styled.div``

const Profile: React.FC = () => (
  <ProfileContainer>
    <ProfileImage src={profileImage} />
    <ProfileName>maruware</ProfileName>

    <ProfileDesc>Backend/Infra Engineer</ProfileDesc>

    <IconsContainer>
      <IconLink url="https://github.com/maruware" icon={faGithub} />
      <IconLink url="https://twitter.com/maruware" icon={faTwitter} />
      <IconLink url="mailto:me@maruware.com" icon={faEnvelope} />
    </IconsContainer>
  </ProfileContainer>
)

export default Profile
