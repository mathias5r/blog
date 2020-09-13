import React from 'react';
import styled from 'styled-components';

import profileConfig from 'config/profile.json';
import profileImage from 'assets/imgs/profile.png';

const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background-color: red;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
`;

const Name = styled.h3`
  color: white;
  text-align: center;
`;

const ProfileView = (): JSX.Element => (
  <Info>
    <Profile>
      <ProfileImage src={profileImage} />
    </Profile>
    <Name>{profileConfig.name}</Name>
  </Info>
);

export default ProfileView;
