import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <main role='main' className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email</label>
            <input className={css(styles.input)} type='email' name='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input className={css(styles.input)} type='password' name='password' id='password' />
            <button className={css(styles.button)} type='button'>OK</button>
        </main>
    );
}

const styles = StyleSheet.create({
    login: {
        padding: '16px 24px',
    },
    input: {
        margin: '4px',
    },
    button: {
        margin: '4px',
        cursor: 'pointer',
    },
});
export default Login;