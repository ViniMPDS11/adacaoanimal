import styles from './Burger.module.css'

const Burger = () => {
    return (
        <label className={styles.burger} htmlFor="burger">
            <input type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default Burger;