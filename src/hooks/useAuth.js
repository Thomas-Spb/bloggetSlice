import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, authRequestAsync } from '../store/auth/authAction';
import { delToken } from '../store/tokenReducer';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => {
    dispatch(authLogout());
    dispatch(delToken());
  };
  return [auth, loading, clearAuth];
};
