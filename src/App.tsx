import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  @media(min-width: 1200px){
    grid-template-columns: 1fr 3fr;
  }
`;

const Area = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
`;

const Info = styled.div`
  flex: 1;
`;

const Post = styled.div`
  flex: 0.25;
  transition: all 500ms ease-in-out;
  transition-property: opacity, flex;
  overflow: hidden;
  position: relative;
  opacity: 1;

  &:hover {
    flex: 0.6;
    opacity: 0.5;
  }
`;

const Image = styled.img`
  position: absolute;
  left: -80%;
  height: 100vh;
`;

const images = [
  'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];

function App(): JSX.Element {
  return (
    <Container>
      <Area><Info></Info></Area>
      <Area>
        {images.map((image, index) => <Post key={index.toString()}><Image src={image} /></Post>)}
      </Area>
    </Container>
  )
}

export default App;
