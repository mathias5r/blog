import React from 'react';
import styled from 'styled-components';

import { text3Bold } from 'text/text3';
import { text4Light } from 'text/text4';
import TimelineImage from '../../TimelineImage/TimelineImage';

interface TimelinePostViewProps {
  id: string;
  post: {
    image: string;
    title: string;
    thumb: string;
    intro: string;
    url: string;
  };
  visible: boolean;
  isInViewPort: boolean;
}
const Content = styled.div<{ visible: boolean }>`
  position: absolute;
  z-index: 3;
  max-width: 450px;
  text-align: center;
  position: absolute;
  opacity: 1
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
  const { id, isInViewPort, post, visible } = props;
  const { image, title, thumb, intro, url } = post;

  return (
    <TimelineImage {...{ id, image, isInViewPort, thumb, visible }}>
      <Content {...{ visible }}>
        <Title>{title}</Title>
        <Text>{intro}</Text>
        <Link href={url}>See more</Link>
      </Content>
    </TimelineImage>
  )
}

export default TimelinePost;