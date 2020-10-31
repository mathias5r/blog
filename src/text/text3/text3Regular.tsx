import styled from 'styled-components';

import Colors from 'assets/Colors';

export default styled.p`
  color: ${Colors.TEXT};
  font-family: "TitilliumWeb-Regular";
  font-size: 1.3rem;
  letter-spacing: 0;
  line-height: 1.5;


  @media only screen and (max-width: 1500px) {
    font-size: 1rem;
  }
`;
