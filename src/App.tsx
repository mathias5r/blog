import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 200px;
`;

const Area = styled.div`
  display: flex;
  flex: 1;
  background-color: red;
  border: 20px solid green;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
  justify-content: center;
`;

const Info = styled.div`
  flex: 0.5;
  background-color: yellow;
`;

const Carousel = styled.div`
  flex: 0.5;
  background-color: yellow;
  -webkit-transform: skewX(20deg);
  -moz-transform: skewX(20deg);
  -ms-transform: skewX(20deg);
  -o-transform: skewX(20deg);
  transform: skewX(20deg);
`;

function App(): JSX.Element {
  console.log('teste')
  return (
    <Container>
      <Area><Carousel></Carousel></Area>
      <Area><Info></Info></Area>
    </Container>
  )
}

export default App;
