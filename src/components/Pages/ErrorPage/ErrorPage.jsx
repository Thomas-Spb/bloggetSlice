import { Text } from '../../../UI/Text';
import style from './ErrorPage.module.css';
import errorImg from './img/ImgErrorPage.png';

export const ErrorPage = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <img src={errorImg} className={style.icon} />
      <Text As="h2" size={22} tsize={26} color="orange" center>
        Упс, ошибка 404...
      </Text>
      <Text As="h2" size={22} tsize={26} color="orange" center>
        Вы зашли куда-то не туда :(
      </Text>
    </div>
  );
};
