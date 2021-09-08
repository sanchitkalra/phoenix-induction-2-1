import { Grommet } from 'grommet'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  }
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp
