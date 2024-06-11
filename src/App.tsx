import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
      <div>
        <button
          className="w-25  btn btn-outline-success m-4"
          onClick={() => setShowAlert(false)}
        >
          Нажмите чтобы открыть Alert окно
        </button>
        <Alert
          show={showAlert}
          onDismiss={() => setShowAlert(false)}
          message=""
        ></Alert>
      </div>
    </>
  );
};

export default App;
