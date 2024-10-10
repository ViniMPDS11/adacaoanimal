import Slider from '../../components/Slider';
import posts from '../../json/posts.json';
import styles from './Home.module.css'
import PostCard from '../../components/PostCard';

const Home = () => {
    return (
        <>
            <Slider />
            <div className={styles.postsArea}>
                <h1 className={styles.subtitle}>Centros de adoção próximos de você</h1>
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>))}
                </ul>
            </div>
        </>
    )
}

export default Home;