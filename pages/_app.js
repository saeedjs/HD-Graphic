import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </> )
}

export default MyApp
