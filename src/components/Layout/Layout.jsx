import cls from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => (
  <div className={cls.container}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
