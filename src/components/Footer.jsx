import React from 'react';
import styles from '../styles/Footer.module.css'
import { AppShell } from '@mantine/core'

const Footer = () => {
    return (
        <AppShell>

        <AppShell.Footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p > 2023 The Fridge. All rights reserved.</p>
            </div>
        </AppShell.Footer>
        </AppShell>
    );
};


export default Footer;
