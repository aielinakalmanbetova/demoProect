import React from 'react';
interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}
const Modal: React.FC<Props> = ({ show, title, children, onClose }) => {
  return (
    <>
      <div
        className="modal-backdrop show"
        style={{ display: show ? 'block' : 'none' }}
      />
      <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                className="btn-close"
                aria-labelledby="X"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
