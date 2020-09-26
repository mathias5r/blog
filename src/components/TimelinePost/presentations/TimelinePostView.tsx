import React from 'react';
import styled from 'styled-components';

interface TimelinePostViewProps {
  image: string;
}

const Container = styled.div<{ image: string }>`
  height: 500px;
  position: relative;
  background-color: black;

  &:before {
    content: '';
    background-image: url(${(props: any): { image: string } => props.image});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
`;

const TimelinePost = (props: TimelinePostViewProps): JSX.Element => {
  const { image } = props;
  return (
    <Container {...{ image }} />
  )
}

export default TimelinePost;