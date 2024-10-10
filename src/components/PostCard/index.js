import BotaoPrincipal from '../../components/BotaoPrincipal';
import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const capa = require(`../../assets/posts/${props.post.id}/capa.png`);

    return (
        <Link to={`/olamundo/posts/${props.post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa}
                    src={capa}
                    alt='Capa do post'
                />
                <h2 className={styles.titulo}>
                    {props.post.titulo}
                </h2>
                <BotaoPrincipal texto='Ler'/>
            </div>
        </Link>
    );
}

export default PostCard;