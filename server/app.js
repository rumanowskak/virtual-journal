const express = require("express");
const mongoose = require("mongoose")
const User = require("./models/users/user")
const Entry = require("./models/entries/entry")

// const session = require('express-session');

const app = express();

const dbURL = "mongodb+srv://admin:admin@virtual-journal-databas.zgoip6f.mongodb.net/?retryWrites=true&w=majority&appName=virtual-journal-database"

mongoose.connect(dbURL)
    .then((result)=>{
        app.listen(5000, () =>{console.log("server started on port 5000")});
    })
    .catch((err) => console.log(err));


app.use(express.urlencoded({extended:true}));    
app.use(express.json());

// app.use(session({
//     secret: 'your-secret-key',
//     resave: true,
//     saveUninitialized: true
//    }));

app.get("/api/users/email-check/:email" ,(req,res)=>{
    const email = req.params.email;
    let userExists= false;
    console.log("in email");
    User.find()
        .then((result) =>{
            result.map((user)=>{
                if(user.email == email)
                {
                    userExists=true;
                    res.json({"userExists":true});
                }
            })
            if(userExists == false)
                res.json({"userExists":false});

        })
        .catch((err)=>{
            res.status(400);
            console.error(err);
        })
});

app.post("/api/users/register" , (req,res) =>{
    const user = new User(req.body);
    user.save()
        .then((result) =>{
            res.status(201).send({
                message: "User Created Successfully",
                result,
              });
        })
        .catch((err)=>{
            res.status(400);
        })
});

app.post("/api/users/login" , (req,res) =>{

    try {
        console.log("in login");
        console.log(req.body.email);
        User.findOne({ email: req.body.email })
            .then((result)=>{
                console.log(result);
                console.log(result.password);
                console.log(req.body.password);
                if (result) {
                    if (req.body.password === result.password) {
                        res.status(200).json({"user":result});
                    } else {
                      res.status(400).json({ error: "password doesn't match" });
                    }
                  } else {
                    res.status(400).json({ error: "User doesn't exist" });
                  }
            })
      } catch (error) {
        res.status(400).json({ error });
      }
});


app.post("/api/entries", (req,res) =>{
    console.log('in entry post:req.body' + req.body);
    console.log('in entry post:req.body' + req.body);

    const entry = new Entry(req.body);
    console.log('entry:' + entry);
    entry.save()
        .then((result) =>{
            console.log(result);
            res.status(201).send({
                message: "Entry Created Successfully",
                result,
              });
        })
        .catch((err)=>{
            console.error(err);
            res.status(400);
        })
})