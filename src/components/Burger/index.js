import styles from './Burger.module.css'
import './Burger.css'
import { useState } from 'react';

const Burger = ({ isChecked, setIsChecked }) => {

    const handleInputChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(isChecked)
    }

    return (
        <label className={styles.burger} htmlFor="burger">
            <input
            type="checkbox"
            id="burger"
            className='burgerInput'
            checked={isChecked}
            onChange={handleInputChange}
            />
            <span />
            <span />
            <span />
        </label>
    )
}

export default Burger;