import { Text } from '../../../../../UI/Text';
import PropTypes from 'prop-types';
import cls from './Comments.module.css';
import formatDate from '../../../../../utils/formatDate';

export const Comments = props => {
  const comments = props.comments;

  //   console.log(comments);

  return (
    <ul className={cls.list}>
      {comments.map(comment => {
        const { id, body, author, created: date } = comment;
        return (
          comment.body && (
            <li className={cls.item} key={id}>
              <Text As="h3" className={cls.author} size={18} tsize={22}>
                {author}
              </Text>
              <Text As="p" className={cls.comment} size={14} tsize={18}>
                {body}
              </Text>
              {date && <time dateTime={date}>{formatDate(date)}</time>}
            </li>
          )
        );
      })}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

{
  /* <ul className={cls.list}>
{comments.map(post => {
  console.log(post);
  <li className={cls.item}>
    <Text As="h3" className={cls.author} size={18} tsize={22}>
      Maks
    </Text>
    <Text As="p" className={cls.comment} size={14} tsize={18}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      natus eaque modi!
    </Text>
    <Date date={date} />
  </li>;
})}
</ul> */
}
