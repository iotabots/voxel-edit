import "./App.css";
import VoxelManager from "./VoxelManager";
import Game from "./Game";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {

  const theme = createTheme({
    typography: {
      fontFamily: 'Press Start 2P',
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#2b2b2b',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Navigation />
      <Routes>
        <Route path="/" element={<VoxelManager />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
};

export default App;
