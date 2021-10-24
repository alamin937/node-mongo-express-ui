import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ShowServices = (props) => {
    const {_id,name, price, img} = props.service

    const handleId = id =>{
        const url = `http://localhost:5000/services/${id}`
        fetch(url ,{
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount ){
                alert('delete Succesfully')
            }
        })
    }



    return (
        <div>
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h3>{price}</h3>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <NavLink to={`/show/${_id}`}><button>Details</button> </NavLink>
        <button onClick={() => handleId(_id)}>Delete</button>
      </Card>
    </Col>
        </div>
    );
};

export default ShowServices;