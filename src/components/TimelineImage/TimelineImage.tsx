import LazyImage from 'components/LazyImage/LazyImage';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  id: string;
  image: string;
  isInViewPort: boolean;
  thumb: string;
  visible: boolean;
}

const Container = styled.div`
  height: 500px;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Common = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;
  width: 100%;
  height: auto;
`;

const Thumb = styled(Common)<{ isLoaded: boolean; thumb: string}>`
  filter: blur(20px);
  display: ${(props: any): string =>
    props.isLoaded ? 'none' : 'block'};
  transition: visibility 500ms ease-in-out;
  background-image: url(${(props: any): { image: string } =>  props.thumb});
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

const TimelineImage: React.FC<ImageProps> = ({
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
