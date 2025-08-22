import React, { useState } from 'react';
import styles from './MobileDrawer.module.css';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';



const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };
};

export default MobileDrawer;
