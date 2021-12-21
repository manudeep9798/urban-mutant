import { useEffect } from 'react/cjs/react.development'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("loaded");
  })
  return <Component {...pageProps} />
}

export default MyApp
