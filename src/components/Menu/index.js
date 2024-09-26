import styles from './Menu.module.css';
import Diviser from './Diviser/index';
import MenuLink from './MenuLink';
<<<<<<< HEAD
=======
import Burger from '../Burger';

>>>>>>> bf8354eaf015398986cf8f6ed2de409611b7c3d6
import { ReactComponent as HeadphoneIcon } from '../../assets/images/headphone.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/home.svg';
import { ReactComponent as HelpIcon } from '../../assets/images/help.svg';
import { ReactComponent as AdoptMeIcon } from '../../assets/images/adoptme.svg';
import { ReactComponent as Partnership } from '../../assets/images/partnership.svg';

const Menu = () => {
  return (
    <div className={styles.menu}>
<<<<<<< HEAD
=======
      <Burger />
>>>>>>> bf8354eaf015398986cf8f6ed2de409611b7c3d6
      <p className={styles.logo}>LOGO</p>
      <Diviser />
      <div className={styles.links}>
        <MenuLink icon={<MenuIcon />} text='Início' />
        <MenuLink icon={<HeadphoneIcon />} text='Fale conosco' />
        <MenuLink icon={<HelpIcon />} text='Ajuda' />
        <MenuLink icon={<AdoptMeIcon />} text='Quero adotar' />
        <MenuLink icon={<Partnership />} text='Seja parceiro' />
      </div>
      <div className={styles.flexEnd}>
        <Diviser />
        <p className={styles.logo}>LOGO</p>
      </div>
    </div>
  );
};

export default Menu;
