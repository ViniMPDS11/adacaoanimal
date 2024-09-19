import { Link } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = (props) => {
  return (
    <Link className={styles.menuLink}>
      {props.icon}
      {props.text}
    </Link>
  );
};

export default MenuLink;
