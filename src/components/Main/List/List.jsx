import { useEffect, useRef } from 'react';
import cls from './List.module.css';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { Preloader } from '../../../UI/Preloader/Preloader';
import { Outlet, useParams } from 'react-router-dom';
import { postsRequestAsync } from '../../../store/posts/postsActions';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const after = useSelector(state => state.posts.after);
  //   const postListTest = useSelector(state => state.postListReducer);

  console.log('posts', posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
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
