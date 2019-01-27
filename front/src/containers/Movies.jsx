import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import './Movies.css';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/fetch';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchMoviesAction } = this.props;
    fetchMoviesAction();
  }

  render() { 
    const { movies } = this.props;
    return (
      <div className="Movies">
        <h2>Movies</h2>
        <div className="moviesDisplay">
          {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            name={movie.name}
            date={movie.release_date}
            rating={movie.rating}
            category={movie.category}
            director={movie.director}
            poster={movie.poster}
            seasons={movie.seasons}
          />
          ))}
        </div>
      </div>
     );
  }
}

const mstp = state => ({
  movies: state.fetchedMovies,
});

const mdtp = dispatch => bindActionCreators({
  fetchMoviesAction: fetchMovies,
}, dispatch)

export default connect(mstp, mdtp)(Movies);