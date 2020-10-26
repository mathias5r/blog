import React, { useEffect } from 'react';
import styled from 'styled-components';

interface LazyImageProps {
  image: string;
  isInViewPort: boolean;
  isLoaded: boolean;
  setIsLoaded: Function;
}

const Common = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Container = styled(Common)<{ image: string; isLoaded: boolean; isInViewPort: boolean }>`
  opacity: ${(props: any): number => (props.isLoaded && !props.isInViewPort ? 1 : 0.3)};
  background-image: url(${(props: any): { image: string } =>  props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 1000ms ease-in-out;
`;

const LazyImage = (props: LazyImageProps): JSX.Element => {
 const { image, isInViewPort, isLoaded, setIsLoaded } = props;

 useEffect(() => {
   const img = new Image()
   img.src = image
   img.onload = () => setIsLoaded(true)
 }, [image])

 return <Container image={image} isLoaded={isLoaded} isInViewPort={isInViewPort} />;
}

export default LazyImage;