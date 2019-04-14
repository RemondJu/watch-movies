import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneMovie } from '../actions/fetch';
import { withRouter } from 'react-router-dom';

const MovieDetails = (props) => {
  const { id } = props;

  useEffect(() => {
    console.log('test', props.match.params.id);
    getOneMovie(`http://localhost:4100/movies-api/movie/${props.match.params.id}`);
  });


  return (
    <div className="MovieDetails">
      <h1>{`Details of the movie #${props.match.params.id}` || 'Loading...'}</h1>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getOneMovie,
}, dispatch);

const mapStateToProps = state => ({
  movie: state.singleMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
