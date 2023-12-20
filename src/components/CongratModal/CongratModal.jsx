import './congratModal.scss';
import cup from '../../../public/golden-goblet.jpg';
import Button from '../Button/Button';
import classNames from 'classnames';

const CongratModal = ({ visible }) => {
  return (
    <div className={classNames(['congrat-modal', visible || ''])}>
      <div className='congrat-modal__content'>
        <figure>
          <img src={cup} alt='winner cup' />
        </figure>
        <h3>Congratulations!</h3>
        <p>You have successfully completed all your tasks.</p>
        <Button>Close</Button>
      </div>
    </div>
  );
};

export default CongratModal;
