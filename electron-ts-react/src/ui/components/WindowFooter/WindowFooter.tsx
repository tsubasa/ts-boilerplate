import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div<{ active?: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.offset.height.windowFooter}px;
  font-size: 12px;
  user-select: none;
  transition: background-color 0.5s linear;
  background-color: ${(props) => props.theme.palette.common.windowFooter};
  overflow: hidden;
`;

const StyledItem = styled.div<{ right?: boolean }>`
  margin-left: ${(props) => (props.right ? 'auto' : `${props.theme.offset.unit}px`)};

  &:last-of-type {
    margin-right: ${(props) => props.theme.offset.unit}px;
  }
`;

const WindowFooter: React.FC = () => {
  return (
    <StyledFooter>
      <StyledItem>
        Left
      </StyledItem>
      <StyledItem right>
        Right
      </StyledItem>
    </StyledFooter>
  );
};

export default WindowFooter;
