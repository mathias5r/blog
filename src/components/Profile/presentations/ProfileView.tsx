import React from 'react';
import styled from 'styled-components';

import profileConfig from 'config/profile.json';
import profileImage from 'assets/imgs/profile.png';
import Colors from 'assets/Colors';

import { text3Bold } from 'text/text3';
import { text4Regular } from 'text/text4';

const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Profile = styled.div`
  border-radius: 150px;
  height: 300px;
  overflow: hidden;
  width: 300px;

  @media only screen and (max-width: 350px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileImage = styled.img`
  height: 300px;
  width: 300px;

  @media only screen and (max-width: 350px) {
    width: 200px;
    height: 200px;
  }
`;

const Name = styled(text3Bold)`
  line-height: 1;
  text-align: center;
`;

const Text = styled(text4Regular)`
  line-height: 0;
  margin: 15px;
  text-align: center;
`;

const Link = styled.a`
  color: ${Colors.TEXT};
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
