import { useState } from 'react';
import styles from './Menu.module.css';
import './Menu.css';
import Diviser from './Diviser/index';
import MenuLink from './MenuLink';
import Burger from '../Burger';

import { ReactComponent as HeadphoneIcon } from '../../assets/images/headphone.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/home.svg';
import { ReactComponent as HelpIcon } from '../../assets/images/help.svg';
import { ReactComponent as AdoptMeIcon } from '../../assets/images/adoptme.svg';
import { ReactComponent as Partnership } from '../../assets/images/partnership.svg';

const Menu = ({ isChecked, setIsChecked }) => {
  return (
    <div className={`${styles.menu} ${isChecked ? styles.checkedStyle : ''}`}>

      <Burger isChecked={isChecked} setIsChecked={setIsChecked} />
      <p className={styles.logo}>LOGO</p>
      <Diviser />
      <div className={styles.links}>
        <MenuLink icon={<MenuIcon />} text='Início' path='/'/>
        <MenuLink icon={<HeadphoneIcon />} text='Fale conosco' path='/FaleConosco' />
        <MenuLink icon={<HelpIcon />} text='Ajuda' path='/FAQ' />
        <MenuLink icon={<AdoptMeIcon />} text='Quero adotar' path='/Adocao' />
        <MenuLink icon={<Partnership />} text='Seja parceiro' path='/SejaParceiro' />
      </div>
      <div className={styles.flexEnd}>
        <Diviser />
        <p className={styles.logo2}>LOGO</p>
      </div>
    </div>
  );
};

export default Menu;
