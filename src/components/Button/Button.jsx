import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Button.module.css';

const Button = ({ label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button 
      type="button"
      className={styles.button} 
      onClick={handleClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
