import * as React from 'react'
import styled from 'styled-components'

import profileImage from './maruware.jpg'

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
const Profile: React.FC = () => (
  <ProfileContainer>
    <ProfileImage src={profileImage} />
    <ProfileName>maruware</ProfileName>
  </ProfileContainer>
)

export default Profile
