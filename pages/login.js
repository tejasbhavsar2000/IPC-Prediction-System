import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "../styles/Login.module.css";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "../lib/usercontext";
import runModel from "../lib/runModel";

const Login = () => {
  const { userState, setUserState } = useContext(UserContext);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "Admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("/api/login", user).then((res) => {
      if (res.data.message === "Login Successfull") {
        alert(res.data.message);
        setUserState(res.data.user);
        if (res.data.user.type == "Officer") Router.push("/register");
        else if (res.data.user.type == "PI") Router.push("/pipage");
      }

      //setLoginUser(res.data.user);
    });
  };

  return (
    <div className={styles.outer}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/Logo.jpg" width=" 150px" height="100px"></Image>
        </div>
      </div>
      <div className={styles.heading}>Indian Penal Code Suggestor </div>
      <motion.form
        className={styles.login}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        id="loginform"
      >
        <h1>Login</h1>
        <input
          required
          type="text"
          s
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          required
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <select
          name="type"
          form="loginform"
          onChange={handleChange}
          defaultChecked="Admin"
        >
          <option value="Admin">Admin</option>
          <option value="Officer">Officer</option>
          <option value="PI">PI</option>
        </select>

        <motion.div
          whileHover={{ cursor: "pointer", scale: 1 }}
          whileTap={{ scale: 0.8 }}
          type="submit"
          onClick={login}
          className={styles.button}
        >
          Login
        </motion.div>

        <div>or</div>
        <Link href="/registerUser" passHref>
          <motion.div
            whileHover={{ cursor: "pointer", scale: 1 }}
            whileTap={{ scale: 0.8 }}
            className={styles.button}
          >
            Register
          </motion.div>
        </Link>
      </motion.form>
    </div>
  );
};

export default Login;
