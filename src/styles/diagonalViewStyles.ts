/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components';

export default (degrees = 0): any => css`
  -webkit-transform: skewX(${degrees}deg);
  -moz-transform: skewX(${degrees}deg);	
  -ms-transform: skewX(${degrees}deg);	
  -o-transform: skewX(${degrees}deg);
  transform: skewX(${degrees}deg);
`