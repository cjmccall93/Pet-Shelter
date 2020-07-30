import React, { useState, UseEffect } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "@reach/router";


const Display = props => {
    const [pets, setPets] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                console.log(res);
                setPets(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Hello</h1>
            <div>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map( (pet, i) => 
                    <tr key={pet._id}>
                        <th scope="row">{pet.name}</th>
                        <td>{pet.petType}</td>
                    <td><Link className="btn btn-outline-success" to={`/edit/${pet._id}`}>Edit</Link>/
                    <Link className="btn btn-outline-success" to={`/details/${pet._id}`}>Details</Link></td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>

    )
}

export default Display;