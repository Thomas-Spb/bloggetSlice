import { Text } from '../../../../../UI/Text';
import cls from './Rating.module.css';
import PropTypes from 'prop-types';

export const Rating = ({ ups }) => (
  <div className={cls.rating}>
    <button className={cls.up} aria-label="Повысить рейтинг" />
    <Text As="p" color="green" medium className={cls.ups}>
      {ups}
    </Text>
    <button className={cls.down} aria-label="Понизить рейтинг" />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
