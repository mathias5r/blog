/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

interface PostProps {
  id: string;
  backgroundImage: string;
}

const DiagonalStyles = (degrees = 0): any => css`
  -webkit-transform: skewX(${degrees}deg);
  -moz-transform: skewX(${degrees}deg);	
  -ms-transform: skewX(${degrees}deg);	
  -o-transform: skewX(${degrees}deg);
  transform: skewX(${degrees}deg);
`

const Container = styled.div<{ isMouseOver: boolean }>`
  flex: ${({ isMouseOver }): number => isMouseOver ? 0.6 : 0.25 };
  overflow: hidden;
  position: relative;
  transition-property: flex;
  transition: all 500ms ease-in-out;

  ${DiagonalStyles(-20)};
`;

const Background = styled.img<{ isMouseOver: boolean }>`
  ${DiagonalStyles(20)};
  height: 100vh;
  left: -80%;
  opacity: ${({ isMouseOver }): number => isMouseOver ? 0.3: 1 };
  position: absolute;
  transition-property: opacity;
  z-index: 1;
  transition: all 500ms ease-in-out;
`;

const Content = styled.div`
  ${DiagonalStyles(20)};
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

    const { id, backgroundImage } = props;

    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
      const mouseOver = fromEvent(document.getElementById(id) as FromEventTarget<Event>, 'mouseover')
        .pipe(debounceTime(200))
        .subscribe(() => setIsMouseOver(true));

      const mouseOut = fromEvent(document.getElementById(id) as FromEventTarget<Event>, 'mouseout')
        .pipe(debounceTime(200))
        .subscribe(() => setIsMouseOver(false));

      return (): void => {
        mouseOver.unsubscribe();
        mouseOut.unsubscribe();
      };
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