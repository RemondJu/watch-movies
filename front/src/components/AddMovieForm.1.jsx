import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      director: '',
      category: '',
      synopsis: '',
      poster: '',
      big_poster: '',
      release_date: '',
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch('http://localhost:4100/movies-api/movie', config)
      .then(res => res.json())
      .then(this.setState({
        name: '',
        director: '',
        category: '',
        synopsis: '',
        poster: '',
        big_poster: '',
        release_date: '',
        rating: 0,
      }));
  }

  render() {
    const {
      name,
      director,
      category,
      synopsis,
      poster,
      big_poster,
      release_date
    } = this.state;
    return (
      <Form className="AddMovieForm" onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" value={name} placeholder="E.T. ..." onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="director" sm={2}>Director</Label>
          <Col sm={10}>
            <Input type="text" name="director" id="director" value={director} placeholder="S. Spielberg..." onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="release_date">Release date</Label>
          <Col sm={10}>
            <Input
              type="date"
              name="release_date"
              id="release_date"
              value={release_date}
              onChange={this.handleChange} 
            />
          </Col>          
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="exampleNumber">Rating</Label>
          <Col sm={10}>
            <Input
              onChange={this.handleChange}
              type="number"
              name="rating"
              id="rating"
              placeholder="5"
              min="0"
              max="10"
            />
          </Col>          
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Category</Label>
          <Col sm={10}>
            <Input type="select" name="category" id="exampleSelect" value={category} onChange={this.handleChange} >
              <option>Adventure</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Animation</option>
              <option>Science-fiction</option>
              <option>Thriller</option>
              <option>Crime</option>
              <option>Horror</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Synopsis" sm={2}>Synopsis</Label>
          <Col sm={10}>
            <Input type="textarea" name="synopsis" id="Synopsis" value={synopsis} placeholder="Story of a little alien lost on planet earth and found by a young human boy" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Poster" sm={2}>Poster</Label>
          <Col sm={10}>
            <Input type="text" name="poster" id="Poster" placeholder="url" value={poster} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="big_poster" sm={2}>Big Poster</Label>
          <Col sm={10}>
            <Input type="text" name="big_poster" id="big_poster" value={big_poster} placeholder="url" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default AddMovieForm;
