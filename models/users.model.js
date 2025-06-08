import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    role:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

const Users = mongoose.model("Users", usersSchema);

export default Users;