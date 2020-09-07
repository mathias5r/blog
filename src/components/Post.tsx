/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Observable,
  fromEvent,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

import diagonalViewStyles from '../helpers/diagonalViewStyles';

interface PostProps {
  index: number;
  backgroundImage: string;
  isMouseOver: boolean;
  mousesOver$: Observable<any>[];
  setMousesOver$:  ($: Observable<any>[]) => void;
}

const Container = styled.div<{ isMouseOver: boolean }>`
  flex: ${({ isMouseOver }): number => isMouseOver ? 0.6 : 0.25 };
  overflow: hidden;
  position: relative;
  transition-property: flex;
  transition: all 500ms ease-in-out;
`;

const Background = styled.img<{ isMouseOver: boolean }>`
  ${diagonalViewStyles(20)};
  height: 100vh;
  min-height: 800px;
  left: -100%;
  opacity: ${({ isMouseOver }): number => isMouseOver ? 0.3: 1 };
  position: absolute;
  transition-property: opacity;
  z-index: 1;
  transition: all 500ms ease-in-out;
`;

const Content = styled.div`
  ${diagonalViewStyles(20)};
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1<{ isMouseOver: boolean }>`
  color: white;
  opacity: ${({ isMouseOver }): number => isMouseOver ? 1 : 0 };
  transition-property: opacity;
  transition: all 500ms ease-in-out;
`;

const Text = styled.h4<{ isMouseOver: boolean }>`
  color: white;
  width: 300px;
  opacity: ${({ isMouseOver }): number => isMouseOver ? 1 : 0 };
  transition-property: opacity;
  transition: all 500ms ease-in-out;
  text-align: center;
`;

const Post = (props: PostProps): JSX.Element => {

    const { index, backgroundImage, isMouseOver, mousesOver$, setMousesOver$} = props;

    const id = `post${index}`;

    useEffect(() => {
      mousesOver$[index] = fromEvent(document.getElementById(id) as FromEventTarget<Event>, 'mouseenter')
        .pipe(map(() =>  index));
      setMousesOver$([...mousesOver$])
    }, [id]);

    return ( 
      <Container {...{ id, isMouseOver }}>
        <Content>
          <Title {...{ isMouseOver }}>Title</Title>
          <Text {...{ isMouseOver }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione vitae ipsam quidem delectus, laudantium magni animi molestias illum, cum nam? Voluptate nesciunt sunt delectus totam veritatis, asperiores quaerat vitae!</Text>
        </Content>
        <Background isMouseOver={isMouseOver} src={backgroundImage} />
      </Container>
    )
}

export default Post;