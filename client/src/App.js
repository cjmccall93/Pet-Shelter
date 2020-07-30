import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import {Link, Router} from '@reach/router';
import PetForm from './components/PetForm';
import PetEdit from './components/PetEdit';
import Details from './components/Details';


function App() {
  return (
    <div className="container">
      <h1>Pet Shelter App</h1>
      
      <Link className= "btn btn-info" to="/">Pets</Link>
      <Link className= "btn btn-info" to="/new">New Pets!</Link>
      <Router className="my-5">
        <Display path= "/" />
        <PetForm path= "/new"/>
        <PetEdit path="/edit/:_id"/>
        <Details path="/details/:_id"/>
      </Router>


    </div>
  );
}

export default App;
