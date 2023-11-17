import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import closeIcon from '../../assets/closeIcon.svg';

import styles from './styles.module.scss';

type ModalProps = {
  show: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ show, onClose, children }: ModalProps) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 300, exit: 0 }}>
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          {children}
          <button className={styles.closeBtn} onClick={onClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')!,
  );
};

export default Modal;
