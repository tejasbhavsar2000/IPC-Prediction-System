import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../lib/usercontext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [userState, setUserState] = useState("");
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
