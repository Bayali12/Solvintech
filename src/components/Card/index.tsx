import { FC } from 'react';

import styles from './styles.module.scss';

type CardProps = {
  imageUrl: string;
  name: string;
  email: string;
  onClick: () => void;
};

export const Card: FC<CardProps> = ({ imageUrl, name, email, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick()}>
      <img className={styles.image} src={imageUrl} alt="user img" />
      <div className={styles.userInfo}>
        <p>
          <span className={styles.title}>name: </span>
          {name}
        </p>
        <p>
          <span className={styles.title}>email: </span>
          {email}
        </p>
      </div>
    </div>
  );
};
