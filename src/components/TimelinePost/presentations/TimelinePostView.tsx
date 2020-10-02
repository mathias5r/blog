import React from 'react';
import styled from 'styled-components';

import { text3Regular } from 'text/text3';
import { text4Light } from 'text/text4';

interface TimelinePostViewProps {
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
}

const Container = styled.div<{ image: string }>`
  height: 500px;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

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
    opacity: 0.3;
  }
`;

const Content = styled.div`
  max-width: 450px;
  text-align: center;
  position: absolute;
`;

const Title = styled(text3Regular)`
  color: white;
`;

const Text = styled(text4Light)`
  color: white;
`;

const Link = styled.a`
  color: white;
`;

const TimelinePost = (props: TimelinePostViewProps): JSX.Element => {
  const { post } = props;
  const { image, title, intro, url } = post;

  return (
    <Container image={image} >
      <Content>
        <Title>{title}</Title>
        <Text>{intro}</Text>
        <Link href={url}>See more</Link>
      </Content>
    </Container>
  )
}

export default TimelinePost;