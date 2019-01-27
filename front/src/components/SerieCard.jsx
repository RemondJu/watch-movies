import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './MovieCard.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  deleteSerie(id) {
    const config = {
      method: 'DELETE',
    };
    fetch(`http://localhost:4100/movies-api/serie/${id}`, config);
  }

  updateSerie(id) {
    const config = {
      method: 'UPDATE',
    };
    fetch(`http://localhost:4100/movies-api/serie/${id}`, config);
  }

  render() { 
    const { name, date, rating, category, director, poster, seasons, id } = this.props;
    return ( 
      <div className="MovieCard">
        <Card>
          <CardImg top width="100%" height="450px" src={poster} alt="Card image cap" />  
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>released : {date}</CardSubtitle>
            <CardSubtitle>Category : {category}</CardSubtitle>
            <CardSubtitle>Director : {director}</CardSubtitle>
            {seasons ? <CardSubtitle>Seasons : {seasons}</CardSubtitle> : ''}
            <CardSubtitle>Rating : {rating}/10</CardSubtitle>
            <Button onClick={() => this.deleteSerie(id)}>Delete</Button>
            <Button onClick={() => this.updateSerie(id)}>Update</Button>
          </CardBody>
        </Card>
      </div>
     );
  }
}
 
export default MovieCard;
