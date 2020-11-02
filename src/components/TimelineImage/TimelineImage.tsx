import React, { useState } from 'react';
import styled from 'styled-components';

import Colors from 'assets/Colors';
import { imageCommonStyles } from 'styles';

import LazyImage from 'components/LazyImage/LazyImage';

import TimelineImageProps from './interfaces/TimelineImageProps';

const Container = styled.div`
  align-items: center;
  background-color: ${Colors.BACKGROUND};
  display: flex;
  height: 500px;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Thumb = styled.div<{ isLoaded: boolean; thumb: string } >`
  ${imageCommonStyles};

  display: ${(props: any): string =>
    props.isLoaded ? 'none' : 'block'};
  background-image: url(${(props: any): { thumb: string } =>  props.thumb});
  background-size: cover;
  background-position: center;
  filter: blur(20px);
  transition: visibility 500ms ease-in-out;
  z-index: 2;
`;

const TimelineImage: React.FC<TimelineImageProps> = ({
  id,
  image,
  isInViewPort,
  thumb,
  children,
  visible,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Container {...{ id }}>
      {visible && (
        <LazyImage
          image={image}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          isInViewPort={isInViewPort}
        />
      )}
      <Thumb thumb={thumb} isLoaded={isLoaded} />
      {children}
    </Container>
  );
};

export default TimelineImage;
