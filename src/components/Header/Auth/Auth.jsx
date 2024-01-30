import cls from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import { Preloader } from '../../../UI/Preloader/Preloader';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(true);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const handleDelToken = () => {
    dispatch(delToken());
    clearAuth();
  };

  return (
    <div className={cls.container}>
      {loading ? (
        <Preloader color={'#cc6633'} size={40} />
      ) : auth.name ? (
        <>
          <button className={cls.btn} onClick={getOut}>
            <img
              className={cls.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name}
            />
          </button>
          {showLogout && (
            <button
              className={cls.logout}
              onClick={() => {
                handleDelToken();
              }}
            >
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={cls.authLink} As="a" href={urlAuth}>
          <LoginIcon className={cls.svg} width={30} height={30} />
        </Text>
      )}
    </div>
  );
};
