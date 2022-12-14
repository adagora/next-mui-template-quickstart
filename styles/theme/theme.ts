import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const mainTheme = [
  {
    typography: {
      h1: {
        fontSize: '4.5rem',
        fontWeight: '800',
        lineHeight: 1.167,
        marginBottom: '1.75rem',
        // fontFamily: '"Playfair Display", serif',
        textShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        overflowWrap: 'break-word',
        hyphens: 'manual',
      },
      h2: {
        fontSize: '3rem',
        fontWeight: '800',
        lineHeight: 1.167,
        marginBottom: '1.25rem',
        // fontFamily: '"Playfair Display", serif',
        textShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        overflowWrap: 'break-word',
        hyphens: 'manual',
      },
      h3: {
        fontSize: '2.125rem',
        fontWeight: '700',
        lineHeight: 1.235,
        marginBottom: '1rem',
        // fontFamily: '"Playfair Display", serif',
        textShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        overflowWrap: 'break-word',
        hyphens: 'manual',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: '700',
        lineHeight: 1.334,
        marginBottom: '1rem',
        // fontFamily: '"Playfair Display", serif',
        textShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        overflowWrap: 'break-word',
        hyphens: 'manual',
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: 1.6,
        marginBottom: '1rem',
        // fontFamily: '"Playfair Display", serif',
        textShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        overflowWrap: 'break-word',
        hyphens: 'manual',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: 1.8,
        letterSpacing: '0.0075em',
        marginBottom: '0.5rem',
        // fontFamily: '"Playfair Display", serif',
        textShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        overflowWrap: 'break-word',
        hyphens: 'manual',
      },
      body2: {
        marginBottom: '24px',
        fontSize: '1rem',
        lineHeight: '1.75',
      },
    },
  },
];

let lightTheme = createTheme(
  {
    palette: {
      background: {
        default: '#FFFFFF',
      },
      text: {
        primary: '#000',
        secondary: 'rgba(0,0,0,0.7)',
      },
      primary: {
        main: '#00868F',
      },
      secondary: {
        main: '#FF8219',
      },
    },
    typography: {
      body2: {
        color: 'rgba(0,0,0,0.8)',
      },
    },
  },
  ...mainTheme,
);

let darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      background: {
        default: '#0E141F',
      },
      text: {
        primary: '#fff',
        secondary: 'rgba(255,255,255,0.7)',
      },
      primary: {
        main: '#9FD2DB',
      },
      secondary: {
        main: '#FC9E4F',
      },
    },
    typography: {
      body2: {
        color: 'rgba(255,255,255,0.8)',
      },
    },
  },
  ...mainTheme,
);

export const LightTheme = responsiveFontSizes(lightTheme);

export const DarkTheme = responsiveFontSizes(darkTheme);
