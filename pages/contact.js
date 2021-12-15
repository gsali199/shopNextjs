import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";

{
  /* <head>
  <style>

  </style>
</head>; */
}
const Contact = () => {

  return (
    <>
      <Navbar />
      {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}
      <h1>Welcome to contact page</h1>

      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
