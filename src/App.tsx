import React from 'react';
import styled from 'styled-components';

import Post from './components/Post';


import profileImage from './15868862.png'

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  @media(min-width: 1200px){
    grid-template-columns: 1fr 3fr;
  }
`;

const Posts = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 200px;
`;


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

const images = [
  'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];

const App = (): JSX.Element => {

  return (
    <Container>
      <Info>
        <Profile>
          <ProfileImage src={profileImage} />
        </Profile>
        <Name>Mathias Silva da Rosa</Name>
      </Info>
      <Posts>
        {images.map((image, index) => <Post key={index.toString()} backgroundImage={image} id={`post${index}`} />)}
      </Posts>
    </Container>
  )
}

export default App;
