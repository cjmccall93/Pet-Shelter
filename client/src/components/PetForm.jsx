import React, { useState } from 'react';
import { navigate } from "@reach/router";
import axios from 'axios';


const PetForm = props => {
    const [name, setName]=useState("");
    const [petType, setPetType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] =useState({});

    const CreatePet = e => {
        e.preventDefault();
        const PetItem = {name, petType, description, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pet", PetItem)
            .then(res =>{
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
            <form onSubmit={CreatePet}>
                <div className="row">
                    <div className="col">
                        <label >Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={e => setName(e.target.value)}/>
                        {errors.name ?
                        <p className="text-danger">{errors.name.properties.message}</p>:"" }
                    </div>
                    <div className="col">
                        <label >Skill</label>
                        <input type="text" className="form-control" placeholder="Skill" onChange={e => setSkill1(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-5">
                <div className="col">
                        <label >Pet Type</label>
                        <input type="text" className="form-control" placeholder="Pet Type" onChange={e => setPetType(e.target.value)}/>
                        {errors.petType ?
                        <p className="text-danger">{errors.petType.properties.message}</p>:"" }
                    </div>
                    <div className="col">
                        <label>Skill 2</label>
                        <input type="text" className="form-control" placeholder="Skill 2" onChange={e => setSkill2(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-5">
                <div className="col">
                        <label>Description</label>
                        <input type="text" className="form-control" placeholder="Description"onChange={e => setDescription(e.target.value)}/>
                        {errors.description ?
                        <p className="text-danger">{errors.description.properties.message}</p>:"" }
                    </div>
                    <div className="col">
                        <label>Skill 3</label>
                        <input type="text" className="form-control" placeholder="Skill 3"onChange={e => setSkill3(e.target.value)}/>
                    </div>
                </div>
                <input type="submit" className="btn btn-success btn-block" value="Add new pet" />
            </form>
    )

}

export default PetForm;