import styles from './Forms.module.css'

const Forms = (props) => {
    return (
        <>
            <form className={styles.formArea}>
                <h1>{props.title}</h1>
                <div className={styles.formFields}>
                    {props.children}
                </div>
            </form>
        </>
    )
}

export default Forms;