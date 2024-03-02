const express = require("express");
const mongoose = require("mongoose")
const User = require("./models/users/user")

const app = express();

const dbURL = "mongodb+srv://admin:admin@virtual-journal-databas.zgoip6f.mongodb.net/?retryWrites=true&w=majority&appName=virtual-journal-database"

mongoose.connect(dbURL)
    .then((result)=>{
        app.listen(5000);
    })
    .catch((err) => console.log(err));


app.get('/api/users/email-check/:email' ,(req,res)=>{
    const email = req.params.email;
    const userExists= false;
    User.find()
        .then((result) =>{
            result.map((user)=>{
                if(user.email == email)
                {
                    userExists=true;
                    res.json({userExists:true});
                }
            })
            if(userExists == false)
                res.json({userExists:false});
        })
        .catch((err)=>{
            res.statusCode(400);
        })
})

