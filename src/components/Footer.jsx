import React from 'react';
import styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2023 Your Website Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
