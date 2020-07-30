import React, { useState, UseEffect } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, navigate } from "@reach/router";


const Details = props => {
    const [pet, setPet] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                console.log(res);
                setPet(res.data);
        })
        .catch(err => console.log(err));
    }, []);
    


    const remove = _id => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res);
                navigate("/");
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <button className="btn btn-outline-danger float-right" onClick={e => remove(pet._id)}>Adopt!</button>
            <h1>Details about : {pet.name}</h1>
            <div className="jumbotron">
                <h1>Pet Type: {pet.petType} </h1>
                <h1>Description: {pet.description}</h1>
                <ul><h1>Skills</h1></ul>
                <li>{pet.skill1}</li>
                <li>{pet.skill2}</li>
                <li>{pet.skill3}</li>
            </div>
            
        </div>

    )
}

export default Details;