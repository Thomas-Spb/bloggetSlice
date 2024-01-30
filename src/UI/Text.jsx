import classNames from 'classnames';
import PropTypes from 'prop-types';
import cls from './Text.module.css';

export const Text = props => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    onClick,
    center,
    bold,
    medium,
  } = props;

  const classes = classNames(
    className,
    cls[color],
    { [cls.center]: center },
    { [cls.bold]: bold },
    { [cls.medium]: medium },
    { [cls[`fs$size`]]: size },
    { [cls[`fst${tsize}`]]: tsize },
    { [cls[`fsd${dsize}`]]: dsize },
  );
  return (
    <As className={classes} href={href} onClick={onClick}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.node,
  ]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
};
