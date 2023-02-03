import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

// disable console.log in production
if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
