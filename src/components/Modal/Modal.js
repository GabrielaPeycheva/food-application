import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

import styles from './Modal.module.scss';

const Modal = ({
    recipeDetails,
    isModalOpen,
    handleClose,
    isLoading
}) => {

    return (
        <React.Fragment>
            {  isModalOpen && recipeDetails
                ? <div className={`${styles.modalWrapper}`}>
                    <div className={styles.modal}>
                        <Link to="/recipes" className={styles.close} onClick={handleClose}>
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                            </svg>
                        </Link>
                        <h2>{recipeDetails.title}</h2>
                        <img src={recipeDetails.image}  alt={recipeDetails.title} />
                        <h3>Ingredients:</h3>
                        <div className={styles.ingrWrapper}>
                        { recipeDetails.ingredients && recipeDetails.ingredients.length && recipeDetails.ingredients.map((ing,i) => {
                              return <span key={ing.id + i}>{ing.name}</span>
                            })
                        }
                        </div>
                        <h3>Instructions:</h3>
                        { isLoading === false && recipeDetails.steps
                            ? recipeDetails.steps.map(r => {
                            // return <p key={r.steps.step}>{r.steps.number}. {r.steps.step}</p>
                                return (
                                    <>
                                        <p><b>{r.name}</b></p>
                                        {r.steps.map(s => { return <p>{s.number}. {s.step}</p>})}
                                    </>
                                )
                                })
                            : null
                        }
                        <p><b>Cooking time:</b> {recipeDetails.readyInMinutes}min</p>
                        <h2>Enjoy!</h2>
                    </div>
                    </div>
                : isLoading
                    ? <Spinner />
                    : null
            }
        </React.Fragment>
    );
};

export default Modal;