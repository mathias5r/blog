import React from 'react';
import styled from 'styled-components';

import diagonalViewStyles from 'helpers/diagonalViewStyles';
import textBehavior from 'helpers/textBehavior';

import { text3Bold } from 'text/text3';
import { text4Light } from 'text/text4';

interface HeaderPostProps {
  id: string;
  post: {
    image: string;
    title: string;
    intro: string;
    url: string;
  };
  isMouseOver: boolean;
}

const Container = styled.div<{ isMouseOver: boolean }>`
  flex: ${({ isMouseOver }): number => (isMouseOver ? 0.6 : 0.25)};
  overflow: hidden;
  position: relative;
  transition-property: flex;
  transition: all 500ms ease-in-out;
`;

const Background = styled.img<{ isMouseOver: boolean }>`
  ${diagonalViewStyles(20)};
  height: 100vh;
  left: -100%;
  min-height: 800px;
  opacity: ${({ isMouseOver }): number => (isMouseOver ? 0.3 : 1)};
  position: absolute;
  transition-property: opacity;
  transition: all 500ms ease-in-out;
  z-index: 1;

  @media only screen and (max-width: 1300px) {
    ${diagonalViewStyles(0)};
    height: auto;
    left: 0;
    max-width: 100%;
    min-height: 500px;
    min-width: 600px;
    opacity: 0.5;
  }
`;

const Content = styled.div`
  ${diagonalViewStyles(20)};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;

  @media only screen and (max-width: 1300px) {
    ${diagonalViewStyles(0)};
  }
`;

const Title = styled(text3Bold)<{ isMouseOver: boolean }>`
  ${(props): any => textBehavior(props.isMouseOver)}
`;

const Text = styled(text4Light)<{ isMouseOver: boolean }>`
  ${(props): any => textBehavior(props.isMouseOver)}
`;

const Link = styled.a<{ isMouseOver: boolean }>`
  ${(props): any => textBehavior(props.isMouseOver)}
`;

const HeaderPostView = (props: HeaderPostProps): JSX.Element => {
  const { id, isMouseOver, post } = props;
  const { image, title, intro, url } = post;

  return (
    <Container {...{ id, isMouseOver }}>
      <Content>
        <Title {...{ isMouseOver }}>{title}</Title>
        <Text {...{ isMouseOver }}>{intro}</Text>
        <Link href={url} {...{ isMouseOver }}>See more</Link>
      </Content>
      <Background isMouseOver={isMouseOver} src={image} />
    </Container>
  );
};

export default HeaderPostView;
