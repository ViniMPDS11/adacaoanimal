import styles from './Menu.module.css';
import Diviser from './Diviser/index';
import MenuLink from './MenuLink';
import Burger from '../Burger';

import { ReactComponent as HeadphoneIcon } from '../../assets/images/headphone.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/home.svg';
import { ReactComponent as HelpIcon } from '../../assets/images/help.svg';
import { ReactComponent as AdoptMeIcon } from '../../assets/images/adoptme.svg';
import { ReactComponent as Partnership } from '../../assets/images/partnership.svg';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Burger />
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
