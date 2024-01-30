import cls from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef } from 'react';
import { Comments } from '../Main/List/Post/Comments/Comments';
import { FormComment } from '../Main/List/Post/FormComment/FormComment';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Text } from '../../UI/Text';
import { Preloader } from '../../UI/Preloader/Preloader';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [post, comments, status] = useCommentsData(id);

  //   useEffect(() => {
  //     const [commentsData, isLoading] = useCommentsData(id);
  //   }, []);

  // let title = 'title загрузка...';
  // let author = 'author загрузка...';
  // let markdown = 'markdown загрузка...';

  const handleClick = useCallback(e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  });

  const handleKey = useCallback(e => {
    if (e.key === 'Escape') navigate(`/category/${page}`);
  });

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={cls.overlay} ref={overlayRef}>
      <div className={cls.modal}>
        {status === 'loading' && <Preloader color={'#cc6633'} size={150} />}
        {status === 'error' && (
          <Text As="p" medium dsize={18}>
            Произошла ошибка загрузки поста.
          </Text>
        )}
        {status === 'loaded' && (
          <>
            <h2 className={cls.title}>{post.title}</h2>
            <div className={cls.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {post.selftext}
              </Markdown>
            </div>
            <p className={cls.author}>{post.author}</p>
            <FormComment />
            <Comments comments={comments} />
          </>
        )}
        <button
          className={cls.close}
          onClick={() => {
            navigate(`/category/${page}`);
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};

// import PropTypes from 'prop-types';

// import { useCommentsData } from '../../hooks/useCommentsData';

// export const Modal = ({ id }) => {
//   const data = useCommentsData(id);
//   console.log(data);
// };

// Modal.propTypes = {
//   id: PropTypes.string,
// };
