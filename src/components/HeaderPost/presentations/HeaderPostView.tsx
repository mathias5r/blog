import React from 'react';
import styled from 'styled-components';

import { diagonalViewStyles } from 'styles';
import textBehavior from 'helpers/textBehavior';

import { text3Bold } from 'text/text3';
import { text4Light } from 'text/text4';

import HeaderPostViewProps from '../interfaces/HeaderPostViewProps';
import HeaderImage from 'components/HeaderImage/HeaderImage';

const Container = styled.div<{ isMouseOver: boolean }>`
  flex: ${({ isMouseOver }): number => (isMouseOver ? 0.6 : 0.25)};
  overflow: hidden;
  position: relative;
  transition: flex 500ms ease-in-out;
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
  const { image, title, intro, url, thumb } = post;

  return (
    <Container {...{ id, isMouseOver }}>
      <Content>
        <Title {...{ isMouseOver }}>{title}</Title>
        <Text {...{ isMouseOver }}>{intro}</Text>
        <Link href={url} {...{ isMouseOver }}>
          See more
        </Link>
      </Content>
      <HeaderImage {...{ image, isMouseOver, thumb }} />
    </Container>
  );
};

export default HeaderPostView;
