import styled from 'styled-components';
import React from 'react';

import { text3Bold } from 'text/text3';
import { text4Light } from 'text/text4';
import Colors from 'assets/Colors';

import TimelineImage from '../../TimelineImage/TimelineImage';
import TimelinePostViewProps from '../interfaces/TimelinePostViewProps';

const Content = styled.div<{ visible: boolean }>`
  max-width: 450px;
  opacity: 1;
  position: absolute;
  text-align: center;
  z-index: 3;
`;

const Title = styled(text3Bold)`
  padding: 0 10px;
`;

const Text = styled(text4Light)`
  padding: 0 10px;
`;

const Link = styled.a`
  color: ${Colors.TEXT};
`;

const TimelinePost: React.FC<TimelinePostViewProps> = ({
  id,
  isInViewPort,
  post,
  visible,
}): JSX.Element => {
  const { image, title, thumb, intro, url } = post;

  return (
    <TimelineImage {...{ id, image, isInViewPort, thumb, visible }}>
      <Content {...{ visible }}>
        <Title>{title}</Title>
        <Text>{intro}</Text>
        <Link href={url}>See more</Link>
      </Content>
    </TimelineImage>
  );
};

export default TimelinePost;
