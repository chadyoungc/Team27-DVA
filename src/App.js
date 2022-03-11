import * as React from 'react';
import './App.css';
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RecipesProvider } from './Hooks/recipesHook';
import { Body } from './Components/Body'


const theme = createTheme({
  palette: {
    primary: {
      main: '#3949ab',
    },
    secondary: {
      main: '#c6ff00',
    },
  },
  typography: {
    fontFamily: "'Shippori Antique B1', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Shippori Antique B1';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${"https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap"});
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <div className="App">
          <Header />
          <Body />
        </div>
      </RecipesProvider>
    </ThemeProvider>
  );
}

export default App;

