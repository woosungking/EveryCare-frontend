import React from 'react';
import OkBtn from '../../components/button/Btn3';
import SaveBtn from './button/SaveBtn';

// import './AddPillModal.css';

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
  showModal, // 모달 랜더링을 현제 컴포넌트에서 하니까 메인 컴포넌트에 useState를 인자로 받아옴.
  onClose, // onClick이 일어났을때 함수를 실행해야 하므로 메인 컴포넌트에 onClose함수를 실행한다고 알려줘야 함으로 메인컴포넌트의 onClose함수를 인자로 받아옴.
  // onClose={handleCloseModal 의 실행을 위해
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
        <SaveBtn className="h-[35px] w-[50%]" onClick={onClose}>
          저장하기
        </SaveBtn>
      </div>
    </div>
  );
};

export default AddPillModal;
