import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  height: calc(100vh - ${(props) => props.theme.offset.height.notAvailableWindowContent}px);
  overflow: hidden;
`;

const StyledContentsInner = styled.div`
  display: flex;
`;

const WindowContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledContent>
    <StyledContentsInner>{children}</StyledContentsInner>
  </StyledContent>
);

export default WindowContent;
