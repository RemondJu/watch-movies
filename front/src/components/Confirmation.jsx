import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const Confirmation = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { item, buttonLabel } = props;

  const handleConfirmation = () => {
    props.confirmedAction(props.id);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setIsModalOpen(true)}>{ buttonLabel }</Button>
      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>Deletion</ModalHeader>
        <ModalBody>
          {`Do you really want to remove that ${item}?`}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfirmation}>confirm</Button>
          {' '}
          <Button color="secondary" onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(Confirmation);
