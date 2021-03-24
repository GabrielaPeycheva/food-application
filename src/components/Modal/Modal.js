import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Modal.module.scss';

const Modal = ({
   recipeDetails,
   isModalOpen
}) => {

    return (
        <React.Fragment>
            { isModalOpen ?
                <div className={`${styles.modalWrapper} ${isModalOpen ? styles.showModal : ''}`}>
                    <div className={styles.modal}>
                        <NavLink to="" className={styles.close}>
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                            </svg>
                        </NavLink>
                        <h2>{recipeDetails.title}</h2>
                        <img src={recipeDetails.image}  width="350" alt={recipeDetails.title} />
                        <p>Instructions:</p>
                        { recipeDetails.steps.map(r =>
                                <p key={r.step}>{r.number}. {r.step}</p>
                            )}
                        <p>{recipeDetails.readyInMinutes}</p>


                    </div>
                </div> : null
            }
        </React.Fragment>
    );
};

export default Modal;