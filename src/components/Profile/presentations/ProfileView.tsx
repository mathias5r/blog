import React from 'react';
import styled from 'styled-components';

import profileConfig from 'config/profile.json';
import profileImage from 'assets/imgs/profile.png';

import { text3Regular } from 'text/text3';
import { text4Regular } from 'text/text4';

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
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
`;

const Name = styled(text3Regular)`
  color: white;
  text-align: center;
`;

const Text = styled(text4Regular)`
  color: white;
  text-align: center;
  line-height: 0;
`;

const ProfileView = (): JSX.Element => (
  <Info>
    <Profile>
      <ProfileImage src={profileImage} />
    </Profile>
    <Name>{profileConfig.name}</Name>
    <Text>{profileConfig.profession}</Text>
    <Text>{profileConfig.company}</Text>
  </Info>
);

export default ProfileView;
