import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

class SearchedMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="SearchedMovies">
        {movies[0] ? movies.map(movie => (
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
        )) : ''}
      </div>
    );
  }
}

const mstp = state => ({
  movies: state.searchedMovies,
});

export default connect(mstp)(SearchedMovies);
