import cls from './Search.module.css';
import { ReactComponent as SearchIcon } from './img/search.svg';

export const Search = () => (
  <form className={cls.form}>
    <input className={cls.search} type="search" />
    <button className={cls.button}>
      <SearchIcon className={cls.svg} />
    </button>
  </form>
);
