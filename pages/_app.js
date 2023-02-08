import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

// disable console.log in production
// if (process.env.NODE_ENV === "production") {
//   console.log = () => {};
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      {console.log(
        "%cMade with ❤️ by https://zenversee.com",
        "color: #D9D9D9; font-size: 16px; background: #101010; padding: 10px;"
      )}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
