import styled from 'styled-components';

import Colors from 'assets/Colors';

export default styled.p`
  color: ${Colors.TEXT};
  font-family: "TitilliumWeb-Regular";
  font-size: 1rem;
  letter-spacing: 0;
  line-height: 1.5;

  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
