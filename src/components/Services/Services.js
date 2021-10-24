import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <h1>Show Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <ShowServices service={service}></ShowServices>)
                }
    
           </Row>
        </div>
    );
};

export default Services;