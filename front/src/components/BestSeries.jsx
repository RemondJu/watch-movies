import React, { Component } from 'react';
import './BestContent.css';
import SerieCard from './SerieCard';

class BestSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { series } = this.props;
    return (
      <div className="BestSeries">
        <h1>TV shows</h1>
        <div className="moviesDisplay">
          {series[0] ? series.slice(0, 4).map(movie => (
            <SerieCard
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

export default BestSeries;
