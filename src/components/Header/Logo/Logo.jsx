import cls from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <a className={cls.link}>
    <img className={cls.logo} src={logo} alt="Логотип Blogget" />
  </a>
);
