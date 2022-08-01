import React from "react";
import styles from "./styles.module.scss";
import logo from '../assets/daphne-logo-bw.svg';


const AccessLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="daphne-logo" layout="fill" />
      </div>
      {children}
    </div>
  );
};

export default AccessLayout;