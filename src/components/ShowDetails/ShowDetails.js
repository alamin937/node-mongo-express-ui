import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowDetails = () => {
    const {serviceId} = useParams();
    const [shows, setShows] = useState({})
    useEffect(() =>{
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setShows(data))
    },[serviceId])
    return (
        <div>
            <h1>Show Deails</h1>
            <h3>{serviceId}</h3>
            <h2>{shows.name}</h2>
            <img src={shows.img} alt="" />
        </div>
    );
};

export default ShowDetails;