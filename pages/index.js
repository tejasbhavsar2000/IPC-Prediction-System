import Router from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "../lib/usercontext";

export default function Home() {
  const { userState, setUserState } = useContext(UserContext);
  useEffect(() => {
    if (userState == "") Router.push("/login");
  });
  return <></>;
}
