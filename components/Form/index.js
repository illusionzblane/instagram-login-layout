import styles from './Form.module.css'

export default function Form() {
    return (
            <form>
        <input className={styles.inputField} type="text"  placeholder="Phone number, username, or email"></input>
        <input className={styles.inputField} type="text"  placeholder="Password"></input>
            </form>
)}