/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components';

export default (isMouseOver = false): any => css`
  color: white;
  opacity: ${isMouseOver ? 1 : 0};
  text-align: center;
  transition: opacity 500ms ease-in-out;
  width: 250px;
`