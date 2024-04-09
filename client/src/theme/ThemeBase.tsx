import React from 'react';
import { ThemeProvider, CssBaseline, createTheme, LinkProps } from '@mui/material';
import LinkBehavior from './LinkBehavior';

let theme = createTheme({
  typography: {
    fontFamily: ['Pretendard', 'Apple Gothic', 'Dotum', 'sans-serif'].join(','),
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'outlined',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
        },
      },
    },
  },
});

const dialogPaddingY = 10;
theme = {
  ...theme,
  components: {
    ...theme.components,
    MuiDialog: {
      styleOverrides: {
        root: {
          '&.color-primary .MuiDialogTitle-root': {
            backgroundColor: theme.palette['primary'].main,
            color: theme.palette['primary'].contrastText,
            paddingTop: dialogPaddingY,
            paddingBottom: dialogPaddingY,
          },
          '&.color-secondary .MuiDialogTitle-root': {
            backgroundColor: theme.palette['secondary'].main,
            color: theme.palette['secondary'].contrastText,
            paddingTop: dialogPaddingY,
            paddingBottom: dialogPaddingY,
          },
          '&.color-error .MuiDialogTitle-root': {
            backgroundColor: theme.palette['error'].main,
            color: theme.palette['error'].contrastText,
            paddingTop: dialogPaddingY,
            paddingBottom: dialogPaddingY,
          },
          '&.color-info .MuiDialogTitle-root': {
            backgroundColor: theme.palette['info'].main,
            color: theme.palette['info'].contrastText,
            paddingTop: dialogPaddingY,
            paddingBottom: dialogPaddingY,
          },
          '&.color-success .MuiDialogTitle-root': {
            backgroundColor: theme.palette['success'].main,
            color: theme.palette['success'].contrastText,
            paddingTop: dialogPaddingY,
            paddingBottom: dialogPaddingY,
          },
          '&.color-warning .MuiDialogTitle-root': {
            backgroundColor: theme.palette['warning'].main,
            color: theme.palette['warning'].contrastText,
            paddingTop: dialogPaddingY,
            paddingBottom: dialogPaddingY,
          },
          '.MuiDialogTitle-root + .MuiDialogContent-root': {
            paddingTop: 24,
          },
        },
      },
    },
  },
};

const ThemeBase: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeBase;

export { theme, ThemeBase };
