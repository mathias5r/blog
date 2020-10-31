import styled from 'styled-components';

import Colors from 'assets/Colors';

export default styled.h1`
  color: ${Colors.TEXT};
  font-family: "TitilliumWeb-Bold";
  font-size: 1.2rem;
  letter-spacing: 0;
  line-height: 1.5;

  @media only screen and (max-width: 1500px) {
    font-size: 1rem;
  }
`;
