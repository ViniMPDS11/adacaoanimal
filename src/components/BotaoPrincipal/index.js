import styles from './BotaoPrincipal.module.css'

const BotaoPrincipal = (props) => {
    return (
        <button type='button' className={`
        ${styles.botaoPrincipal}
        `}
        style={{ 
            width: props.tamanho?.width,
            margin: props.margin?.margin || '0px'
         }}
        {...props.button}
        >
            {props.texto}
        </button>
    )
}

export default BotaoPrincipal;