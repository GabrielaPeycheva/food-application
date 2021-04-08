import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import { ReactComponent as CheckIcon } from '../../assets/images/icon-check.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg';
import { IMAGE_URL } from '../../services/foodService';

import styles from './Modal.module.scss';

const Modal = ({
    saveHandler,
    deleteHandler,
    recipeDetails,
    isModalOpen,
    handleClose,
    path,
    name,
    isLoading,
}) => {
    return (
        <React.Fragment>
            {  isModalOpen && recipeDetails
                ? <div className={`${styles.modalWrapper}`} key={recipeDetails.id}>
                        <div className={styles.modal}>
                            <Link to={`/${path}`} className={styles.close} onClick={handleClose}>
                                <CloseIcon />
                            </Link>
                            <h2>{recipeDetails.title}</h2>
                            <img src={recipeDetails.image}  alt={recipeDetails.title} />
                            <h3>Ingredients:</h3>
                            <div className={styles.ingrWrapper}>
                            { isLoading === false && recipeDetails.ingredients && recipeDetails.ingredients.length && recipeDetails.ingredients.map((ing,i) => {
                                return (
                                        <span key={ing.id + i.toString()}>
                                            - {ing.originalString}
                                            <img src={`${IMAGE_URL + ing.image}`} height="50" alt={ing.name}/>
                                        </span>

                                    )
                                })
                            }
                            </div>
                            <h3>Instructions:</h3>
                            { isLoading === false && recipeDetails.steps
                                ? recipeDetails.steps.map((r,i) => {
                                    return (
                                        <div key={recipeDetails.id.toString() + r.name}>
                                            <p key={r.name + i.toString()}><b>{r.name}</b></p>
                                            {r.steps.map(s => { return <p key={s.number.toString() + s.step}><b>{s.number}.</b> {s.step}</p>})}
                                        </div>
                                    )
                                    })
                                : null
                            }
                            <p><b>Cooking time:</b> {recipeDetails.readyInMinutes}min</p>
                            <h2>Enjoy!</h2>
                            { name === 'delete'
                                ? recipeDetails.deleted === -1
                                    ? <p>Deleted</p>
                                    :
                                    <Link to={`/${path}`}>
                                        <Button
                                        onClick={() => {
                                        deleteHandler(recipeDetails.id);
                                        handleClose();
                                        }}
                                        className={styles.addButton}
                                        name='delete'
                                       />
                                    </Link>
                                : null
                            }
                            { name === 'add'
                                 ? recipeDetails.saved.length
                                    ?   <h4>
                                            Added &nbsp;
                                            <CheckIcon />
                                        </h4>
                                    :
                                    <Link to={`/${path}`}>
                                        <Button
                                            onClick={() => {
                                            saveHandler(recipeDetails);
                                            handleClose();
                                            }}
                                            className={styles.addButton}
                                            name='add'
                                        />
                                    </Link>
                                :null
                            }
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