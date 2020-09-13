import React from 'react';
import styled from 'styled-components';

import { Observable } from 'rxjs';

import diagonalViewStyles from 'helpers/diagonalViewStyles';

import { Post } from 'components/Post';
import { Profile } from 'components/Profile';

interface AppViewProps {
  itemUnderMouse: number | undefined;
  mousesOver$: Observable<any>[];
  setMousesOver$: ($: Observable<any>[]) => void;
}

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  overflow: hidden;
  padding: 0;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const HeaderPosts = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 100px;

  ${diagonalViewStyles(-20)};
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const BodyPosts = styled.div`
  height: 2000px;
  flex-direction: column;
  display: none;
  background-color: black;

  @media only screen and (max-width: 1200px) {
    display: flex; 
  }
`;

const Timeline = styled.div`
  background-color: black;
`;

const images = [
  'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
];

const AppView = (props: AppViewProps): JSX.Element => {
  const { itemUnderMouse, mousesOver$, setMousesOver$ } = props;

  return (
    <>
      <Container>
        <Profile />
        <HeaderPosts id="posts">
          {images.map((image, index) => (
            <Post
              backgroundImage={image}
              isMouseOver={itemUnderMouse === index}
              key={index.toString()}
              {...{ index, mousesOver$, setMousesOver$ }}
            />
          ))}
        </HeaderPosts>
      </Container>
      <Timeline>
        <BodyPosts>
          {images.map((image, index) => (
            <Post
              backgroundImage={image}
              isMouseOver={itemUnderMouse === index}
              key={index.toString()}
              {...{ index, mousesOver$, setMousesOver$ }}
            />
          ))}
        </BodyPosts>
      </Timeline>
    </>
  );
};

export default AppView;
