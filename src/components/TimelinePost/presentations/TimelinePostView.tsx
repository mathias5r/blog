import React from 'react';
import styled from 'styled-components';

import { text3Bold } from 'text/text3';
import { text4Light } from 'text/text4';

interface TimelinePostViewProps {
  id: string;
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
  visible: boolean;
}

const Container = styled.div<{ image: string; visible: boolean }>`
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
    opacity: ${(props: any): number => props.visible ? 0.3 : 1};
    transition: opacity 500ms ease-in-out;
  }
`;

const Content = styled.div<{ visible: boolean }>`
  max-width: 450px;
  text-align: center;
  position: absolute;
  opacity: ${(props: any): number => props.visible ? 1 : 0};
  transition: opacity 500ms ease-in-out;
`;

const Title = styled(text3Bold)`
  color: white;
  padding: 0 10px;
`;

const Text = styled(text4Light)`
  color: white;
  padding: 0 10px;
`;

const Link = styled.a`
  color: white;
`;

const TimelinePost = (props: TimelinePostViewProps): JSX.Element => {
  const { id, post, visible } = props;
  const { image, title, intro, url } = post;

  return (
    <Container {...{id, image, visible }}>
      <Content {...{ visible }}>
        <Title>{title}</Title>
        <Text>{intro}</Text>
        <Link href={url}>See more</Link>
      </Content>
    </Container>
  )
}

export default TimelinePost;