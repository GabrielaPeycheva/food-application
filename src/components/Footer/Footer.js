import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.rights}>
                <p>&copy; Created by Gabriela Peycheva</p>
            </div>
        </footer>
    );
};

export default Footer;