import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal style={{backgroundColor:"transparent"}} className="mt-20" isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
     
        <ModalBody className="mt-4">
          <p style={{position:"absolute" , marginRight:"150px"}}>dazd</p>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ModalExample;