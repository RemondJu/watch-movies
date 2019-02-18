/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import './SearchedContent.css';
import ActorCard from './ActorCard';

class searchedContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content } = this.props;
    return (
      <div className="searchedContent">
        {content[0] ? content[0].release_date ? content.map(el => (
          <MovieCard
            key={el.id}
            id={el.id}
            name={el.name}
            date={el.release_date}
            rating={el.rating}
            category={el.category}
            director={el.director}
            poster={el.poster}
            seasons={el.seasons}
          />
        ))
          : content.map(el => (
            <ActorCard
              key={el.id}
              id={el.id}
              name={el.name}
              lastname={el.lastname}
              picture={el.picture}
              age={el.age}
            />)) : ''}
      </div>
    );
  }
}

const mstp = state => ({
  content: state.searchedContent,
});

export default connect(mstp)(searchedContent);
