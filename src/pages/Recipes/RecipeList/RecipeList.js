import React, { useEffect, useState } from 'react';

import styles from './RecipeList.module.scss';


const RecipeList = (props) => {
    console.log(props, 'recipelist')

    return (
        <React.Fragment>
            { props.recipes ? props.recipes.map((res) =>
                <div className={styles.recipeContainer} key={res.id}>
                    <p>{res.title}</p>
                    <img src={res.image} width="300" height="200" alt={res.title} />
                </div>)
                : <p>hey there</p>
            }
        </React.Fragment>
    )
}

export default RecipeList;