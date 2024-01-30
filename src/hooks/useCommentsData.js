import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDataAsync } from '../store/postData/postDataActions';

export const useCommentsData = id => {
  const token = useSelector(state => state.token.token);
  const post = useSelector(state => state.postData.post);
  const comments = useSelector(state => state.postData.comments);
  const status = useSelector(state => state.postData.status);
  //   console.log('DATA' data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postDataAsync(id));
    // console.log('dispatch postDataAsync ');
  }, [token]);

  return [post, comments, status];
};
