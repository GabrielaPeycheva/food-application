import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Form.module.scss';

const Form = ({
      onSubmitHandler,
      err,
      name
}) => {
    return (
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <div className={styles.box}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <Input name="email" type="email" placeholder="Email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Password</label>
                        <Input name="password" type="password" placeholder="Password" />
                        {err ? <small className={styles.dangerError}>{err}</small> : null}
                    </div>
                    <Button type="submit" name={name} />
                </div>
            </form>
        );
};

export default Form;