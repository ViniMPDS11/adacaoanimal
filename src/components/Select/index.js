import styles from './Select.module.css'

const InputTextForm = (props) => {
    return (
        <div className={styles.SelectForm}>
            <label htmlFor={props.select.id}>{props.label.name}</label>
            <select {...props.select}>
                {props.children}
            </select>
        </div>
    )
}

export default InputTextForm;