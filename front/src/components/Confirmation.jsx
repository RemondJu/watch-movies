import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/fetch';

const Confirmation = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { item, buttonLabel } = props;

  const handleConfirmation = () => {
    const config = {
      method: 'DELETE',
    };
    fetch(`http://localhost:4100/movies-api/${props.item}/${props.id}`, config)
      .then(() => fetchMovies('http://localhost:4100/movies-api/movies'))
      .then(() => setIsModalOpen(!isModalOpen));
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

const mdtp = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(null, mdtp)(Confirmation);
