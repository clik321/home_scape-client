import React from "react";
import styles from "./Input.module.css";
import { Search } from "lucide-react"; 


const Input = ({ type = "text", placeholder, value, onChange, icon = true }) => {
  return (
    <div className={styles.inputWrapper}>
      {icon && <Search className={styles.icon} />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
