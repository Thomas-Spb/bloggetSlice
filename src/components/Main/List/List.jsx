import { useEffect, useRef } from 'react';
import cls from './List.module.css';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../../../store/posts/postsActions';
import { Preloader } from '../../../UI/Preloader/Preloader';
import { Outlet, useParams } from 'react-router-dom';
import { postListSlice } from '../../../store/PostList/PostListSlice';

export const List = () => {
  const posts = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.loading);
  const after = useSelector(state => state.posts.after);
  const postListTest = useSelector(state => state.postListReducer);
  console.log('postListTest', postListTest);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    console.log('postListSlice EFFECT', postListSlice);
    dispatch(postListSlice.actions.postListClear());
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postRequestAsync());
        }
      },
      {
        rootMargin: '150px',
      },
    );

    observer.observe(endList.current);

    // return () => {
    //   if (endList.current) {
    //     observer.unobserve(endList.current);
    //   }
    // };
  }, [endList.current]);

  return (
    <>
      {loading && after && <Preloader size={150} />}
      <ul className={cls.list}>
        {posts?.map(postData => (
          <Post key={postData.data.id} postData={postData.data} />
        ))}
        <li className={cls.end} ref={endList} />
      </ul>
      <Outlet />
    </>
  );
};
