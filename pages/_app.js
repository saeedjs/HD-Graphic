import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { CssBaseline, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple} from '@mui/material/colors';
function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        colors: {
          black:'#232931',
          gray:'#393E46',
          green:'#4ECCA3',
          white:'#EEEEEE',
          pink:'#F6416C',
        }
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
