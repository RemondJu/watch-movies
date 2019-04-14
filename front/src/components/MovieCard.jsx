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
import { getOneMovie, fetchMovies } from '../actions/fetch';
import './MovieCard.css';
import Confirmation from './Confirmation';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToMovie = this.goToMovie.bind(this);
  }

  goToMovie(path) {
    const { history, id, getOneMovieAction } = this.props;
    getOneMovieAction(`http://localhost:4100/movies-api/movie/${id}`);
    history.push(`/${path || ''}movie/${id}`);
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
          <CardImg top width="100%" height="450px" src={poster} alt="Card image cap" onClick={() => this.goToMovie()} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{`released : ${date.slice(0, 10)}`}</CardSubtitle>
            <CardSubtitle>{`Category : ${category}`}</CardSubtitle>
            <CardSubtitle>{`Director : ${director}`}</CardSubtitle>
            {seasons ? <CardSubtitle>{`Seasons : ${seasons}`}</CardSubtitle> : ''}
            <CardSubtitle>{`Rating : ${rating}/10`}</CardSubtitle>
            <Confirmation confirmedAction={this.deleteMovie} buttonLabel="Delete" id={id} item="movie" />
            <Button type="button" onClick={() => this.goToMovie('modify-')}>Update</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({
  getOneMovieAction: getOneMovie,
  fetchMovies,
}, dispatch);

export default withRouter(connect(null, mdtp)(MovieCard));
