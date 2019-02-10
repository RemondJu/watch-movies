import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOneMovie } from '../actions/fetch';
import './MovieCard.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getMovieToUpdate = this.getMovieToUpdate.bind(this);
  }

  getMovieToUpdate() {
    const { history, id, getOneMovieAction } = this.props;
    getOneMovieAction(`http://localhost:4100/movies-api/movie/${id}`);
    history.push(`/modify-movie/${id}`);
  }

  deleteMovie(id) {
    const { history } = this.props;
    const config = {
      method: 'DELETE',
    };
    fetch(`http://localhost:4100/movies-api/movie/${id}`, config)
      .then(history.push('/'));
  }

  render() {
    const {
      name,
      date,
      rating,
      category,
      director,
      poster,
      seasons,
      id,
    } = this.props;
    return (
      <div className="MovieCard">
        <Card>
          <CardImg top width="100%" height="450px" src={poster} alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{`released : ${date.slice(0, 10)}`}</CardSubtitle>
            <CardSubtitle>{`Category : ${category}`}</CardSubtitle>
            <CardSubtitle>{`Director : ${director}`}</CardSubtitle>
            {seasons ? <CardSubtitle>{`Seasons : ${seasons}`}</CardSubtitle> : ''}
            <CardSubtitle>{`Rating : ${rating}/10`}</CardSubtitle>
            <Button onClick={() => this.deleteMovie(id)}>Delete</Button>
            <Button type="button" onClick={() => this.getMovieToUpdate(id)}>Update</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({
  getOneMovieAction: getOneMovie,
}, dispatch);

export default withRouter(connect(null, mdtp)(MovieCard));
