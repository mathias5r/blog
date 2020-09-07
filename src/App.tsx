/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { map } from 'rxjs/operators';

import Post from './components/Post';

import {
  Observable,
  merge,
} from 'rxjs';

import profileImage from './15868862.png'
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

import diagonalViewStyles from './helpers/diagonalViewStyles';

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  @media(min-width: 1200px){
    grid-template-columns: 1fr 3fr;
  }
  overflow: hidden;
  padding: 0;
`;

const Posts = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 100px;
  ${diagonalViewStyles(-20)};
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

  const initial: Observable<any>[] = []; 
  const [mousesOver$, setMousesOver$] = useState(initial);
  const [itemUnderMouse, setItemUnderMouse] = useState(undefined);

  useEffect(() => {
    const posts$ = fromEvent(document.getElementById('posts') as FromEventTarget<Event>, 'mouseleave')
      .pipe(map(() => undefined));

    const merge$ = merge(...mousesOver$, posts$)
      .pipe(debounceTime(200))
      .subscribe(index => setItemUnderMouse(index));

    return (): void => {
      merge$.unsubscribe();
    }
  }, [mousesOver$])

  return (
    <Container>
      <Info>
        <Profile>
          <ProfileImage src={profileImage} />
        </Profile>
        <Name>Mathias Silva da Rosa</Name>
      </Info>
      <Posts id="posts">
        {images.map((image, index) => 
          <Post 
            backgroundImage={image}   
            isMouseOver={itemUnderMouse === index}
            key={index.toString()} 
            {...{ index, mousesOver$, setMousesOver$ } } />
        )}
      </Posts>
    </Container>
  )
}

export default App;
