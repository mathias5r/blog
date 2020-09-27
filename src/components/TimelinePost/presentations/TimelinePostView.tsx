import React from 'react';
import styled from 'styled-components';

import { text3Regular } from 'text/text3';
import { text4Light } from 'text/text4';

interface TimelinePostViewProps {
  image: string;
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
  width: 300px;
  text-align: center;
  position: absolute;
`;

const Title = styled(text3Regular)`
  color: white;
  transition: opacity 500ms ease-in-out;
`;

const Text = styled(text4Light)`
  color: white;
  text-align: center;
  transition: opacity 500ms ease-in-out;
`;

const TimelinePost = (props: TimelinePostViewProps): JSX.Element => {
  const { image } = props;
  return (
    <Container {...{ image }} >
      <Content>
        <Title>Title</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione
          vitae ipsam quidem delectus, laudantium magni animi molestias illum,
          cum nam? Voluptate nesciunt sunt delectus totam veritatis, asperiores
          quaerat vitae!
        </Text>
      </Content>
    </Container>
  )
}

export default TimelinePost;