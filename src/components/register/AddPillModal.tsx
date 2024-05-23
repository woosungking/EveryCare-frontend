import React from 'react';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

const ModalStyle = {
  width: '100%',
  height: '50%',
  backgroundColor: 'aqua',
  position: 'absolute',
};

const ModalContentStyle = {
  width: '90%',
  height: '90%',
  backgorundColor: 'red',
};
const AddPillModal: React.FC<ModalProps> = ({
  showModal,
  onClose,
  children,
}) => {
  if (!showModal) {
    return null;
  }
  return (
    <div style={ModalStyle} onClick={onClose}>
      <div style={ModalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddPillModal;
