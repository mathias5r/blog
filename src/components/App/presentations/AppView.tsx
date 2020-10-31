import React from 'react';
import styled from 'styled-components';

import { Observable } from 'rxjs';

import { diagonalViewStyles } from 'styles';

import { HeaderPost } from 'components/HeaderPost';
import { TimelinePost } from 'components/TimelinePost';
import { Profile } from 'components/Profile';

import posts from 'config/posts';

interface AppViewProps {
  itemUnderMouse: number | undefined;
  mousesOver$: Observable<any>[];
  setMousesOver$: ($: Observable<any>[]) => void;
}

const Header = styled.div`
  height: 80vh;
  background-color: black;
  display: grid;
  overflow: hidden;
  padding: 0;

  @media (min-width: 1300px) {
    grid-template-columns: 1fr 3fr;
    height: 100vh;
  }
`;

const HeaderPosts = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 100px;

  ${diagonalViewStyles(-20)};
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

const TimelinePosts = styled.div`
  display: none;
  @media only screen and (max-width: 1300px) {
    display: block;
  }
`;


const AppView = (props: AppViewProps): JSX.Element => {
  const { itemUnderMouse, mousesOver$, setMousesOver$ } = props;

  return (
    <>
      <Header>
        <Profile />
        <HeaderPosts id="posts">
          {posts.map((post, index) => (
            <HeaderPost
              isMouseOver={itemUnderMouse === index}
              key={index.toString()}
              {...{ index, mousesOver$, post, setMousesOver$ }}
            />
          ))}
        </HeaderPosts>
      </Header>
      <TimelinePosts>
        {posts.map((post, index) => (
          <TimelinePost key={index.toString()} {...{ index, post }} />
        ))}
      </TimelinePosts>
    </>
  );
};

export default AppView;
