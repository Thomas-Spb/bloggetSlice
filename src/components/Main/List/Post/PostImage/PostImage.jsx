import cls from './PostImage.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({ title, thumbnail }) => (
  <img className={cls.img} src={thumbnail ? thumbnail : notphoto} alt={title} />
);

PostImage.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
