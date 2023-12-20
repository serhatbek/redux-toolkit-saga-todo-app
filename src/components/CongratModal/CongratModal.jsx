import './congratModal.scss';
import cup from '../../../public/golden-goblet.jpg';
import Button from '../Button/Button';
import classNames from 'classnames';
import { useState } from 'react';

const CongratModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={classNames(['congrat-modal', modalOpen ? 'visible' : ''])}>
      <div className='congrat-modal__content'>
        <figure>
          <img src={cup} alt='winner cup' />
        </figure>
        <h3>Congratulations!</h3>
        <p>You have successfully completed all your tasks.</p>
        <Button btnAction={closeModal}>Close</Button>
      </div>
    </div>
  );
};

export default CongratModal;
