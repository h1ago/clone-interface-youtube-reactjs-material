import './App.css';
import { useState } from 'react';
import Header from './components/header/header.js';
import SideBar from './components/sidebar/sidebar.js';
import Content from './components/content/content.js';

import { createTheme, Box, ThemeProvider } from '@material-ui/core';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3ea6ff",
      },
      background: {
        default: darkMode ? "#232323" : "#ffffff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#ffffff",
      },
    }
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Box display="flex" flexDirection="row" style={{backgroundColor: theme.palette.background.default}} >
          <SideBar/>
          <Content />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
