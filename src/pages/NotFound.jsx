import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://tr.rbxcdn.com/16c16c690b1562470cb74a375b680998/420/420/Image/Png" 
        alt="Page Not Found"
        className={styles.image}
      />
      <h1 className={styles.heading}>Oops! Page Not Found</h1>
      <p className={styles.text}>
      It seems like there's nothing cooking here. Check the recipe again or head back home.
      </p>
      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;