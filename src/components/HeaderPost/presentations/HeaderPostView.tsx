import React from 'react';
import styled from 'styled-components';

import diagonalViewStyles from 'helpers/diagonalViewStyles';

import { text3Regular } from 'text/text3';
import { text4Light } from 'text/text4';

interface HeaderPostProps {
  id: string;
  backgroundImage: string;
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

  @media only screen and (max-width: 1200px) {
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

  @media only screen and (max-width: 1200px) {
    ${diagonalViewStyles(0)};
  }
`;

const Title = styled(text3Regular)<{ isMouseOver: boolean }>`
  color: white;
  opacity: ${({ isMouseOver }): number => (isMouseOver ? 1 : 0)};
  transition: opacity 500ms ease-in-out;
`;

const Text = styled(text4Light)<{ isMouseOver: boolean }>`
  color: white;
  opacity: ${({ isMouseOver }): number => (isMouseOver ? 1 : 0)};
  text-align: center;
  transition: opacity 500ms ease-in-out;
  width: 250px;
`;

const HeaderPostView = (props: HeaderPostProps): JSX.Element => {
  const { id, backgroundImage, isMouseOver } = props;

  return (
    <Container {...{ id, isMouseOver }}>
      <Content>
        <Title {...{ isMouseOver }}>Title</Title>
        <Text {...{ isMouseOver }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione
          vitae ipsam quidem delectus, laudantium magni animi molestias illum,
          cum nam? Voluptate nesciunt sunt delectus totam veritatis, asperiores
          quaerat vitae!
        </Text>
      </Content>
      <Background isMouseOver={isMouseOver} src={backgroundImage} />
    </Container>
  );
};

export default HeaderPostView;
