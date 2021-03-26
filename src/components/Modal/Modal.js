import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Modal.module.scss';

const Modal = ({
   recipeDetails,
   isModalOpen,
   handleClose,
}) => {

    return (
        <React.Fragment>
            { isModalOpen && recipeDetails ?
                <div className={`${styles.modalWrapper}`}>
                    <div className={styles.modal}>
                        <Link to="/recipes" className={styles.close} onClick={handleClose}>
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                            </svg>
                        </Link>
                        <h2>{recipeDetails.title}</h2>
                        <img src={recipeDetails.image}  width="350" alt={recipeDetails.title} />
                        <h3>Ingredients:</h3>
                        { recipeDetails.ingredients && recipeDetails.ingredients.length && recipeDetails.ingredients.map(ing => {
                              return <p key={ing.id}>{ing.name}</p>
                            })
                        }
                        <h3>Instructions:</h3>
                        { recipeDetails.steps && recipeDetails.steps.length && recipeDetails.steps.map(r => {
                            return <p key={r.step}>{r.number}. {r.step}</p>
                                })
                        }
                        <p>Cooking time: {recipeDetails.readyInMinutes}</p>
                    </div>
                </div> : null
            }
        </React.Fragment>
    );
};

export default Modal;