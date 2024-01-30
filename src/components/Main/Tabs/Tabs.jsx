import { useEffect, useState } from 'react';
import cls from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { debounceRaf } from '../../../utils/debounce';
import { Text } from '../../../UI/Text';
import { useNavigate } from 'react-router-dom';

const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'rising' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшие', Icon: BestIcon, link: 'best' },
  { value: 'Горячие', Icon: HotIcon, link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [tab, setTab] = useState('Главная');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    handleResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={cls.container}>
      {isDropdown && (
        <div className={cls.wrapperBtn}>
          <button
            className={cls.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            {tab}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropdown) && (
        <ul className={cls.list} onClick={() => setIsDropDownOpen(false)}>
          {LIST.map(({ value, link, id, Icon }) => (
            <Text As="li" bold className={cls.item} key={id}>
              <button
                className={cls.btn}
                onClick={() => {
                  setTab(value);
                  navigate(`/category/${link}`);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
