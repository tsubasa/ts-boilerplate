import React, { useState } from 'react';
import styled from 'styled-components';
import { WindowCloseIcon, WindowMaximizeIcon, WindowMinimizeIcon, WindowRestoreIcon } from '@ui/components/Icon';
import logo from '@assets/icons/logo.svg';

const StyledTitleBar = styled.div`
  display: block;
  height: ${(props) => props.theme.offset.height.windowTitleBar}px;
  width: 100%;
  background: ${(props) => props.theme.palette.primary.bgColor};
  color: ${(props) => props.theme.palette.primary.white};
  user-select: none;
`;

const StyledDragRegion = styled.div`
  display: grid;
  grid-template-columns: auto 138px;
  -webkit-app-region: drag;
`;

const StyledWindowControl = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 46px);
  height: 100%;
  -webkit-app-region: no-drag;
`;

const StyledWindowControlButton = styled.div<{ gridColumn: number }>`
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column: ${(props) => props.gridColumn};
  user-select: none;

  &:hover {
    background: ${(props) =>
      props.gridColumn === 3 ? props.theme.palette.common.windowClose : props.theme.palette.common.windowControl};
  }
`;

const StyledWindowTitle = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.offset.height.windowTitleBar}px;
  margin-left: ${(props) => props.theme.offset.unit}px;
  overflow: hidden;

  img {
    width: 16px;
    height: auto;
    margin-right: ${(props) => props.theme.offset.unit}px;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
`;

const WindowTitleBar: React.FC = () => {
  const { title } = document;

  const [isMaximize, setMaximize] = useState(false);

  const isDev = process.env.NODE_ENV === 'development';

  const close = () => globalThis.window.electron.controller.close();
  const minimize = () => globalThis.window.electron.controller.minimize();
  const maximize = () => globalThis.window.electron.controller.maximize();
  const unmaximize = () => globalThis.window.electron.controller.unmaximize();

  return (
    <StyledTitleBar>
      <StyledDragRegion>
        <StyledWindowTitle>
          <img src={logo} alt={title} />
          <span>{`${title}${isDev ? ' [dev]' : ''}`}</span>
        </StyledWindowTitle>
        <StyledWindowControl>
          <StyledWindowControlButton gridColumn={1} onClick={minimize}>
            <WindowMinimizeIcon />
          </StyledWindowControlButton>
          {isMaximize ? (
            <StyledWindowControlButton
              gridColumn={2}
              onClick={() => {
                unmaximize();
                setMaximize(false);
              }}
            >
              <WindowRestoreIcon />
            </StyledWindowControlButton>
          ) : (
            <StyledWindowControlButton
              gridColumn={2}
              onClick={() => {
                maximize();
                setMaximize(true);
              }}
            >
              <WindowMaximizeIcon />
            </StyledWindowControlButton>
          )}
          <StyledWindowControlButton gridColumn={3} onClick={close}>
            <WindowCloseIcon />
          </StyledWindowControlButton>
        </StyledWindowControl>
      </StyledDragRegion>
    </StyledTitleBar>
  );
};

export default WindowTitleBar;
