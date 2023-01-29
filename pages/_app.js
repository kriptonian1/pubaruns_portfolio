import '../styles/globals.css'

// disable console.log in production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
