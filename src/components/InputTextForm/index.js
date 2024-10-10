import ReactInputMask from 'react-input-mask';
import styles from './InputTextForm.module.css'

const InputTextForm = (props) => {
    return (
        <div className={styles.InputTextForm}>
            <label
            htmlFor={props.forId}
            {...props.button}
            >{props.labelName}</label>
            <ReactInputMask {...props} type='text' id={props.forId}/>
        </div>
    )
}

export default InputTextForm;