import cls from './Header.module.css';
import Auth from './Auth';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Heading from './Heading';

export const Header = () => (
  <header className={cls.header}>
    <Layout>
      <div className={cls.gridContainer}>
        <Logo />
        <Heading text="React" />
        <Search />
        <Auth />
      </div>
    </Layout>
  </header>
);
