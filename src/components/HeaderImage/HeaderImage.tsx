import LazyImage from 'components/LazyImage/LazyImage';
import React, { useState } from 'react';
import styled from 'styled-components';

import { diagonalViewStyles } from 'styles';
import HeaderImageProps from './interfaces/HeaderImageProps';

const Container = styled.div<{ isMouseOver: boolean; image: string }>`
  ${diagonalViewStyles(20)};

  height: 100vh;
  left: -200px;
  min-height: 800px;
  opacity: ${({ isMouseOver }): number => (isMouseOver ? 0.3 : 1)};
  position: relative;
  transition: opacity 500ms ease-in-out;
  width: 1028px;

  @media only screen and (max-width: 1300px) {
    ${diagonalViewStyles(0)};
    height: auto;
    left: 0;
    max-width: 100%;
    min-height: 500px;
    min-width: 600px;
    opacity: 0.5;
  }
`;

const Thumb = styled.div<{ isLoaded: boolean; thumb: string }>`
  height: 100vh;
  display: ${(props: any): string => (props.isLoaded ? 'none' : 'block')};
  background-image: url(${(props: any): { thumb: string } => props.thumb});
  background-size: cover;
  background-position: center;
  filter: blur(20px);
  transition: visibility 500ms ease-in-out;
  z-index: 2;
`;

const HeaderImage: React.FC<HeaderImageProps> = ({
  image,
  isMouseOver,
  thumb,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Container {...{ image, isMouseOver }}>
      <LazyImage
        image={image}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        isInViewPort
        style={{
          opacity: 1,
        }}
      />
      <Thumb thumb={thumb} isLoaded={isLoaded} />
    </Container>
  );
};

export default HeaderImage;
