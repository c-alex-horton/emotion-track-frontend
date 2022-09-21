// import '../styles/globals.css'
import { UserProvider } from '../context/UserContext'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Normalize />
      <GlobalStyles />
      <Component {...pageProps} />
    </UserProvider>)
}

export default MyApp
