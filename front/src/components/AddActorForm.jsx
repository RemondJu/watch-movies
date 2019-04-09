import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { fetchActors } from '../actions/fetch';

const AddActorForm = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [picture, setPicture] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { history } = props;
    const formData = {
      name,
      lastName,
      picture,
      age,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    fetch('http://localhost:4100/movies-api/actor', config)
      .then(res => res.json())
      .then(() => {
        setName('');
        setLastName('');
        setPicture('');
        setAge('');
      })
      .then(() => fetchActors('http://localhost:4100/movies-api/actors'))
      .then(() => history.push('/actors'));
  };

  return (
    <Form className="AddMovieForm" onSubmit={handleSubmit}>
      <h2>Add a movie</h2>
      <FormGroup row>
        <Label for="name" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="name" id="name" value={name} placeholder="John" onChange={e => setName(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastName" sm={2}>Last name</Label>
        <Col sm={10}>
          <Input type="text" name="lastName" id="lastName" value={lastName} placeholder="Travolta" onChange={e => setLastName(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Poster" sm={2}>Poster</Label>
        <Col sm={10}>
          <Input type="text" name="poster" id="Poster" placeholder="url" value={picture} onChange={e => setPicture(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="age" sm={2}>Age</Label>
        <Col sm={10}>
          <Input type="number" name="age" id="age" value={age} onChange={e => setAge(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

const mdtp = dispatch => bindActionCreators({
  fetchActors,
}, dispatch);

export default withRouter(connect(null, mdtp)(AddActorForm));
