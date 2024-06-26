import React from 'react';
import OkBtn from '../../components/button/Btn3';
import './AddPillModal.css';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

const ModalStyle = {
  width: '100%',
  height: '340%',
  backgroundColor: 'white',
  position: 'absolute',
  top: '40%',
  left: '0',
  zIndex: '1',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '15px',
  border: '1px solid gray',
  animation: 'floating 2s infinite',
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
    //ScanConfirm에 showModal 이라는 State가 false면 랜더링을 안하는거임.
    return null;
  }
  return (
    <div style={ModalStyle} onClick={onClose} className="shadow-lg">
      <div style={ModalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
        <OkBtn
          className="bg-white border-sky-200 border-[1px] text-[16px] text-gray-600 "
          onClick={onClose}
        >
          저장하기
        </OkBtn>
      </div>
    </div>
  );
};

export default AddPillModal;
