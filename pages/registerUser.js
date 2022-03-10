import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import axios from "axios";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import Router from "next/router";
const Register = () => {
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
    name: "",
    email: "",
    type: "Admin",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword, type } = user;
    if (name && email && type && password && password === reEnterPassword) {
      axios.post("/api/register", user).then((res) => {
        alert(res.data.message);
        Router.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className={styles.outer}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          {/* <Image src="/Logo.jpg" width=" 150px" height="100px"></Image> */}
        </div>
      </div>
      <div className={styles.heading}>पोलिस दंड विधान सहाय्यक</div>
      <motion.form
        className={styles.register}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
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
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <motion.div
          whileHover={{ cursor: "pointer", scale: 1 }}
          whileTap={{ scale: 0.8 }}
          onClick={register}
          className={styles.button}
        >
          Register
        </motion.div>
        <div>or</div>
        <Link href="/login" passHref>
          <motion.div
            whileHover={{ cursor: "pointer", scale: 1 }}
            whileTap={{ scale: 0.8 }}
            className={styles.button}
          >
            Login
          </motion.div>
        </Link>
      </motion.form>
    </div>
  );
};

export default Register;
