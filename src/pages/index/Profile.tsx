import * as React from 'react'
import styled from 'styled-components'

import profileImage from './maruware.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {grey, blue} from '@material-ui/core/colors'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  margin-right: 40px;
`

const ProfileImage = styled.img`
  border-radius: 4px;
  width: 100px;
  height: 100px;
`

const ProfileName = styled.h2`
  font-weight: 800;
`

const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: ${blue[700]} 
  }
  color: ${grey[700]};
`

interface IconLinkProps {
  url: string
  icon: IconDefinition
}
const IconLink: React.FC<IconLinkProps> = ({ url, icon }) => {
  return (
    <Link href={url} target="_blank">
      <FontAwesomeIcon icon={icon} size="2x"/>
    </Link>
  )
}

const IconsContainer = styled.div``

const Profile: React.FC = () => (
  <ProfileContainer>
    <ProfileImage src={profileImage} />
    <ProfileName>maruware</ProfileName>

    <IconsContainer>
      <IconLink url="https://github.com/maruware" icon={faGithub} />
      <IconLink url="https://twitter.com/maruware" icon={faTwitter} />
      <IconLink url="mailto:me@maruware.com" icon={faEnvelope} />
    </IconsContainer>
  </ProfileContainer>
)

export default Profile
