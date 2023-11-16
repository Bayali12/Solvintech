import { useEffect, useState } from 'react';

import { Card } from '../../components/Card';
import { UserDetails } from '../../components/UserDetails';
import { CardSkeleton } from '../../components/CardSkeleton';
import Modal from '../../components/Modal';
import {
  fetchUsers,
  loadMore,
  setCurrentUser,
} from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IUser } from '../../redux/types';

import styles from './styles.module.scss';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const {
    loading,
    totalUsers,
    startIndex,
    data: users,
  } = useAppSelector((state) => state.users);

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const openModal = (user: IUser) => {
    dispatch(setCurrentUser(user));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch(setCurrentUser(null));
    setIsModalOpen(false);
  };

  console.log(isModalOpen);

  return (
    <div className={styles.container}>
      <div className={styles.usersList}>
        {users.map((user) => (
          <Card
            key={user._id}
            imageUrl={user.picture}
            name={user.name}
            email={user.email}
            onClick={() => openModal(user)}
          />
        ))}
        {loading === 'pending' && [...Array(4)].map(() => <CardSkeleton />)}
      </div>
      {startIndex < totalUsers && (
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => dispatch(loadMore(startIndex))}
            className={styles.moreBtn}>
            Load more...
          </button>
        </div>
      )}
      <Modal onClose={() => closeModal()} show={isModalOpen}>
        <UserDetails />
      </Modal>
    </div>
  );
};
