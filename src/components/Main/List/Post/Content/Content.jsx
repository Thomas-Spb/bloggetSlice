import cls from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { Link, useParams } from 'react-router-dom';

export const Content = ({ title, author, id }) => {
  const { page } = useParams();

  return (
    <div className={cls.content}>
      <Text As="h2" className={cls.title}>
        <Link className={cls.linkPost} to={`/category/${page}/post/${id}`}>
          <Text bold size={18} tsize={24} className={cls.linkPost}>
            {title}
          </Text>
        </Link>
      </Text>
      <Text
        As="a"
        size={12}
        tsize={14}
        color="orange"
        className={cls.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
