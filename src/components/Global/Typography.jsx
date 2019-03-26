import { createGlobalStyle } from 'styled-components';

const getSource = path => `/static/fonts/${path}`;

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Cabin Regular';
    src: url('${getSource('primary')}/Cabin-Regular.woff2') format('woff2'),
    url('${getSource('primary')}/Cabin-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Typography;
