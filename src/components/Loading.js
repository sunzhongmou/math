import React from 'react';
import styled from 'styled-components';

const Animation = styled.span.attrs({
  type: 'text',
  className: 'AnimatedEllipsis',
})``;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Loading>
    <h2>
      <span>加载中</span>
      <Animation />
    </h2>
  </Loading>
);
