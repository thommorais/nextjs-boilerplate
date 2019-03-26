import React from 'react';
import styled from 'styled-components';
import { rem } from 'utils/ui';

const Title = styled.h1`
  color: red;
  font-size: ${rem(20)};
`;

export default () => (
  <div>
    <Title>My page</Title>
  </div>
);
