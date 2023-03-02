export const theme = {
  palette: {
    common: {
      windowClose: '#e81123',
      windowControl: '#8899ac',
      windowFooter: '#1a90d9',
      windowFooterActive: '#e56f26',
    },
    primary: {
      bgColor: '#15202b',
      main: '#1da1f2',
      black: '#192734',
      dark: '#22303c',
      gray: '#2a3b4a',
      light: '#314557',
      white: '#ffffff',
      success: '#21c447',
      error: '#e81123',
      warning: '#d6ad24',
      info: '#8899ac',
    },
  },
  offset: {
    unit: 8, // px
    borderRadius: 4, // px
    width: {
      globalNav: 64, // px
      leftColumn: 304, // px
      maxFieldRow: 512, // px
    },
    height: {
      windowTitleBar: 32, // px
      windowFooter: 24, // px
      headerNav: 30, // px
      notAvailableWindowContent: 56, // px (windowTitleBar + windowFooter)
    },
    padding: {
      column: 16, // px
    },
    zIndex: {
      toast: 9000,
      modal: 8000,
    },
    transition: {
      duration: 250, // ms
    },
  },
};

export default theme;
