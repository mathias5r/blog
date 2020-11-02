import React from 'react';
import styled from 'styled-components';

import { imageCommonStyles } from 'styles';

import ContainerViewProps from './interfaces/ContainerViewProps';
import LazyImageProps from './interfaces/LazyImageProps';
import useLazyImage from './hooks/useLazyImage';

const Container = styled.div<ContainerViewProps>`
  ${imageCommonStyles};

  background-image: url(${(props: any): { image: string } => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${(props: any): number =>
    props.isLoaded && !props.isInViewPort ? 1 : 0.3};
  transition: opacity 1000ms ease-in-out;
`;

const LazyImage: React.FC<LazyImageProps> = ({
  image,
  isInViewPort,
  isLoaded,
  setIsLoaded,
}): JSX.Element => {
  useLazyImage(image, () => setIsLoaded(true));

  return (
    <Container image={image} isLoaded={isLoaded} isInViewPort={isInViewPort} />
  );
};

export default LazyImage;
