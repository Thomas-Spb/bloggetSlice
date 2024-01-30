import cls from './FormComment.module.css';
import { Text } from '../../../../../UI/Text';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../../../store/commentReducer';
import { useAuth } from '../../../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  const handleClick = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };
  return (
    <form className={cls.form}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        className={cls.textarea}
        value={value}
        onChange={handleChange}
      ></textarea>
      <button className={cls.btn} onClick={handleClick}>
        Отправить
      </button>
    </form>
  );
};
