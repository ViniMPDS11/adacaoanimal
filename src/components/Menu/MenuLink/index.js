import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = (props) => {
  const location = useLocation();

  return (
    <Link className={`
    ${styles.menuLink}
    ${location.pathname === props.path ? styles.linkDestacado : ''}`}
    to={props.path}>
      {props.icon}
      {props.text}
    </Link>
  );
};

export default MenuLink;
