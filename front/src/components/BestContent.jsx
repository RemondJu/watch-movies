import React, { Component } from "react";
import MovieCard from "./MovieCard";
import SerieCard from "./SerieCard";
import './BestContent.css';

class BestMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content } = this.props;
    return (
      <div className="BestMovies">
        <h1>{content[0] ? content[0].seasons ? 'Series' : 'Movies' : 'title'}</h1>
        <div className="moviesDisplay">
          {content[0] ? content[0].seasons ? content.slice(0, 4).map(content => (
            <SerieCard
              key={content.id}
              id={content.id}
              name={content.name}
              date={content.release_date}
              rating={content.rating}
              category={content.category}
              director={content.director}
              poster={content.poster}
              seasons={content.seasons}
            />
          )) 
          : 
          content.slice(0, 4).map(content => (
            <MovieCard
              id={content.id}
              key={content.id}
              name={content.name}
              date={content.release_date}
              rating={content.rating}
              category={content.category}
              director={content.director}
              poster={content.poster}
            />
          )) : ''}
        </div>
      </div>
    );
  }
}

export default BestMovies;
