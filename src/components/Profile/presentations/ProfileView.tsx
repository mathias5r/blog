import React from 'react';
import styled from 'styled-components';

import profileConfig from 'config/profile.json';
import profileImage from 'assets/imgs/profile.png';

import { text3Bold } from 'text/text3';
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

  @media only screen and (max-width: 350px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 350px) {
    width: 200px;
    height: 200px;
  }
`;

const Name = styled(text3Bold)`
  color: white;
  text-align: center;
  line-height: 1;
`;

const Text = styled(text4Regular)`
  color: white;
  text-align: center;
  line-height: 0;
  margin: 15px;
`;

const Link = styled.a`
  color: white;
  text-align: center;
`;

const ProfileView = (): JSX.Element => (
  <Info>
    <Profile>
      <ProfileImage src={profileImage} />
    </Profile>
    <Name>{profileConfig.name}</Name>
    <Text>{profileConfig.profession}</Text>
    <Link href={profileConfig.git}>github</Link>
    <Link href={profileConfig.medium}>medium</Link>
    <Link href={profileConfig.company}>@Agriness</Link>
  </Info>
);

export default ProfileView;
