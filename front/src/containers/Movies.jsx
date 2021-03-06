import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from '../components/MovieCard';
import './Movies.css';
import { fetchMovies } from '../actions/fetch';

const Movies = (props) => {
  useEffect(() => {
    const { fetchMoviesAction, movies } = props;
    if (!movies[0]) {
      fetchMoviesAction('http://localhost:4100/movies-api/movies');
    }
  });

  const { movies } = props;
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
};

const mstp = state => ({
  movies: state.fetchedMovies,
  isLoading: state.fetchIsLoading,
});

const mdtp = dispatch => bindActionCreators({
  fetchMoviesAction: fetchMovies,
}, dispatch);

export default connect(mstp, mdtp)(Movies);
