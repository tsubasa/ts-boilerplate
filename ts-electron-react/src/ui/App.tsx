import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@config/theme';
import GlobalStyle from '@ui/styles/GlobalStyle';
import WindowTitleBar from '@ui/components/WindowTitleBar';
import WindowContent from '@ui/components/WindowContent';
import WindowFooter from '@ui/components/WindowFooter';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <WindowTitleBar />
    <WindowContent>
      <h1>Hello World!</h1>
    </WindowContent>
    <WindowFooter />
  </ThemeProvider>
);

export default App;
