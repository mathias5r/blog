import React from 'react';
import styled from 'styled-components';

import { diagonalViewStyles } from 'styles';
import textBehavior from 'helpers/textBehavior';

import { text3Bold } from 'text/text3';
import { text4Light } from 'text/text4';

import HeaderPostViewProps from '../interfaces/HeaderPostViewProps';

const Container = styled.div<{ isMouseOver: boolean }>`
  flex: ${({ isMouseOver }): number => (isMouseOver ? 0.6 : 0.25)};
  overflow: hidden;
  position: relative;
  transition: flex 500ms ease-in-out;
`;

const Background = styled.div<{ isMouseOver: boolean; image: string }>`
  ${diagonalViewStyles(20)};

  background-image: url(${(props: any): { image: string } => props.image});
  background-position: center;
  background-size: cover;
  height: 100vh;
  left: -200px;
  min-height: 800px;
  opacity: ${({ isMouseOver }): number => (isMouseOver ? 0.3 : 1)};
  position: absolute;
  transition: opacity 500ms ease-in-out;
  width: 1028px;
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

const HeaderPostView: React.FC<HeaderPostViewProps> = ({
  id,
  isMouseOver,
  post,
}): JSX.Element => {
  const { image, title, intro, url } = post;

  return (
    <Container {...{ id, isMouseOver }}>
      <Content>
        <Title {...{ isMouseOver }}>{title}</Title>
        <Text {...{ isMouseOver }}>{intro}</Text>
        <Link href={url} {...{ isMouseOver }}>
          See more
        </Link>
      </Content>
      <Background isMouseOver={isMouseOver} image={image} />
    </Container>
  );
};

export default HeaderPostView;
