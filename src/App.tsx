import { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="w-25  btn btn-outline-success m-4"
        onClick={() => setShowModal(true)}
      >
        Нажмите чтобы открыть Модальное окно
      </button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Some kinda modal title"
      >
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-outline-primary"
            onClick={() => alert('Нажали на кнопку continue')}
          >
            Continue
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default App;
