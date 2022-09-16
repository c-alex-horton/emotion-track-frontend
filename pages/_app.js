// import '../styles/globals.css'
import { UserProvider } from '../context/UserContext'
import { Normalize } from 'styled-normalize'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Normalize />
      <Component {...pageProps} />
    </UserProvider>)
}

export default MyApp
