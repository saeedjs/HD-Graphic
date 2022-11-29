import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      colors: {
        black:'#232931',
        gray:'#393E46',
        green:'#4ECCA3',
        white:'#EEEEEE',
        pink:'#F6416C',
      }
    },
  });
  
  return (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </> )
}

export default MyApp
