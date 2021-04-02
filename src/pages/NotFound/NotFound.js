import React from 'react';
import NotFound from '../../assets/images/NotFound.gif';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const notFound = () => (

    <div className={styles.mainWrapper}>
        <h1 className={styles.fourOFour}>404</h1>
        <h2 className={styles.text}>Nothing to do here...</h2>
        <Link to="/"><Button name='go back'/></Link>
        <img className={styles.travolta} src={NotFound} alt='404' />

    </div>
)

export default notFound;