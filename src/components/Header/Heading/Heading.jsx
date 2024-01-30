import { Text } from '../../../UI/Text';
import cls from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({ text }) => (
  <Text As="h1" size={22} tsize={26} center className={cls.heading}>
    {text}
  </Text>
);

Heading.propTypes = {
  text: PropTypes.string,
};
