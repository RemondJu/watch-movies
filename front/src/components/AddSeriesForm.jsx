import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { fetchSeries } from '../actions/fetch';

class AddSeriesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      director: '',
      category: '',
      synopsis: '',
      poster: '',
      releaseDate: '',
      rating: 0,
      seasons: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    const {
      name,
      category,
      director,
      synopsis,
      poster,
      releaseDate,
      rating,
      seasons,
    } = this.state;
    const data = {
      name,
      director,
      category,
      synopsis,
      poster,
      release_date: releaseDate,
      rating,
      seasons,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch('http://localhost:4100/movies-api/serie', config)
      .then(res => res.json())
      .then(this.setState({
        name: '',
        director: '',
        category: '',
        synopsis: '',
        poster: '',
        releaseDate: '',
        rating: 0,
        seasons: 0,
      }))
      .then(() => fetchSeries('http://localhost:4100/movies-api/series'))
      .then(history.push('/series'));
  }

  render() {
    const {
      name,
      director,
      category,
      synopsis,
      poster,
      releaseDate,
    } = this.state;
    return (
      <Form className="AddSeriesForm" onSubmit={this.handleSubmit}>
        <h2>Add a TV show</h2>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" value={name} placeholder="Game of thrones" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="director" sm={2}>Director</Label>
          <Col sm={10}>
            <Input type="text" name="director" id="director" value={director} placeholder="George R. R. Martin" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="releaseDate">Release date</Label>
          <Col sm={10}>
            <Input
              type="date"
              name="releaseDate"
              id="releaseDate"
              value={releaseDate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="rating">Rating</Label>
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
          <Label sm={2} for="seasons">Number of seasons</Label>
          <Col sm={10}>
            <Input
              onChange={this.handleChange}
              type="number"
              name="seasons"
              id="rating"
              placeholder="0"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Category</Label>
          <Col sm={10}>
            <Input type="select" name="category" id="exampleSelect" value={category} onChange={this.handleChange}>
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
            <Input type="textarea" name="synopsis" id="Synopsis" value={synopsis} placeholder="You're gonna see a lot of blood!" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Poster" sm={2}>Poster</Label>
          <Col sm={10}>
            <Input type="text" name="poster" id="Poster" placeholder="Poster url..." value={poster} onChange={this.handleChange} />
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

const mdtp = dispatch => bindActionCreators({
  fetchSeries,
}, dispatch);

export default withRouter(connect(null, mdtp)(AddSeriesForm));
