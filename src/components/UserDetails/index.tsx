import { useAppSelector } from '../../hooks';
import styles from './styles.module.scss';

export const UserDetails = () => {
  const user = useAppSelector((state) => state.users.currentUser);

  return (
    <div className={styles.container}>
      <img src={user?.picture} alt="user img" className={styles.image} />
      <div className={styles.userInfo}>
        <p>
          <span className={styles.title}>name: </span>
          {user?.name}
        </p>
        <p>
          <span className={styles.title}>age: </span>
          {user?.age}
        </p>
        <p>
          <span className={styles.title}>email: </span>
          {user?.email}
        </p>
        <p>
          <span className={styles.title}>phone: </span>
          {user?.phone}
        </p>
        <p>
          <span className={styles.title}>about: </span>
          {user?.about}
        </p>
      </div>
    </div>
  );
};
