import React, { useState } from 'react';

import styles from './SearchInput.module.scss';

const SearchInput = ({onSubmit}) => {
    const [params, setParams] = useState('');

    return (
        <div className={styles.mainWrapper}>
            <form className={styles.searchWrapper} onSubmit={(e) => { e.preventDefault(); onSubmit(params) }}>
                <input id="search" type="text" name="search" placeholder="Find recipe.." className={styles.input} autoComplete="off"
                       onChange={(e) => {setParams(e.target.value)}} onFocus={(e)=>{e.target.value = ''}}/>
                <button type="submit" className={styles.buttonSearch} >Go</button>
            </form>
        </div>
    );
};

export default SearchInput;