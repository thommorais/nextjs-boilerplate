import { css } from 'styled-components';
import get from './get';
import rem from './rem';
import { containerWidth } from './grid';

export const containerMixin = css`
  margin: 0 auto;
  max-width: ${rem(containerWidth + 30 /* 30 cuz of padding left/right */)};
  padding: 0 ${rem('15px')};
`;

export const buttonMixin = css`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
`;

export const contentLightMixin = css`
  color: ${get('color.contentLight')};
  font-family: ${get('font.primaryLight')};
  line-height: ${rem(20)};
`;
