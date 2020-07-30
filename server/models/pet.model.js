console.log("pet.model.js");

const mongoose =require("mongoose");

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"A name is required."],
        minlength:[3, "Name must be 3 characters or longer."]
    },
    petType:{
        type: String,
        required:[true, "Pet type is required."],
        minlength:[2, "Pet type must be longer then 2 characters."]
    },
    description:{
        type: String,
        required:[true, "A description is required."],
        minlength:[10, "Description must be at least 10 characters."]
    },
    skill1:{
        type:String
    },
    skill2:{
        type:String
    },
    skill3:{
        type:String
    }


},{timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);