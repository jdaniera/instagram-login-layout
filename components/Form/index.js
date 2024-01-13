import styles from './Form.module.css'

export default function Form() {
    return(
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <input type ="username"
                    id="username"
                    label="Phone number, username or email"
                    className={styles.fields}
                    placeholder="Phone number, username, or email"
                />
                <input type="password"
                    id="password"
                    label= "Password"
                    className={styles.fields}
                    placeholder="Password"
                />
                <input className={styles.loginButton}
                    type="submit" value="Log in" />
            </form>
        </div>
    )
}