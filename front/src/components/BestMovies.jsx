import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './BestContent.css';

class BestMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="BestMovies">
        <h1>Movies</h1>
        <div className="moviesDisplay">
          {movies[0] ? movies.slice(0, 4).map(movie => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              name={movie.name}
              date={movie.release_date}
              rating={movie.rating}
              category={movie.category}
              director={movie.director}
              poster={movie.poster}
            />
          )) : ''}
        </div>
      </div>
    );
  }
}

export default BestMovies;
