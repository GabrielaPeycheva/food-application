import React, { useState } from 'react';

import styles from './SearchInput.module.scss';

const SearchInput = ({onClick}) => {
    const [params, setParams] = useState('');

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.searchWrapper}>
                <input id="search" type="text" name="search" className={styles.input} autoComplete="off" onChange={(e) => setParams(e.target.value)} />
                <button type="submit" className={styles.buttonSearch} onClick={() => onClick(params)}>Go</button>
            </div>
        </div>
    );
};

export default SearchInput;