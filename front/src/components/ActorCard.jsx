import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class ActorCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.getActorToUpdate = this.getActorToUpdate.bind(this);
    this.deleteActor = this.deleteActor.bind(this);
  }

  deleteActor(id) {
    const config = {
      method: 'DELETE',
    };
    fetch(`http://localhost:4100/movies-api/movie/${id}`, config);
  }

  getActorToUpdate() {
    const { history, id, getOneActorAction } = this.props;
    getOneActorAction(`http://localhost:4100/movies-api/movie/${id}`);
    history.push(`/modify-movie/${id}`);
  }

  render() { 
    const { name, lastname, age, id } = this.props
    return ( 
      <div className="ActorCard">
        <Card>
          <CardImg top width="100%" height="450px" src="" alt="Card image cap" />  
          <CardBody>
            <CardTitle>{`${name} ${lastname}`}</CardTitle>
            <CardSubtitle>{age}</CardSubtitle>
              <Button onClick='{() => this.deleteActor(id)}'>Delete</Button>
              <Button type="button" onClick='{() => this.getActorToUpdate(id)}'>Update</Button>
          </CardBody>
        </Card>
      </div>
     );
  }
}
 
export default ActorCard;