const express = require("express");
const mongoose = require("mongoose");
const routes =  require("./Routes/restaurants.routes.cjs");
const userRoutes = require("./Routes/users.routes.cjs");

const app = express();

// built in middlewares
app.use(express.json());

app.listen("5100", () => {
    console.log("server is running on port 5100");
})

mongoose.connect("mongodb+srv://internshala:internshala@cluster0.ftm2cjm.mongodb.net/");

const db = mongoose.connection;

db.on("error", () => {
    console.log("connection not successful");
});

db.on("open", () => {
    console.log("connection is successful");
});

app.get("/", (req, res) => {
    res.send("Learning NodeJS");
});

const users = [
    {
        id: 1,
        name: "John",
        age: 23
    },
    {
        id: 2,
        name: "Jiya",
        age: 34
    },
    {
        id: 3,
        name: "Ria",
        age: 63
    },
    {
        id: 4,
        name: "Tina",
        age: 45
    },
    {
        id: 5,
        name: "Bob",
        age: 25
    },
];

// application level middlewares
app.use(loggedInUserRequest);

// Fetch all users

app.get("/users", authUser, (req, res) => {
    res.send(users);
})

function authUser (req, res, next) {
    console.log("auth user called");
    next();
}

function loggedInUserRequest(req, res, next) {
    console.log("user has initiated request");
    next();
}

// create a new user

app.post("/user", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const user = {
        id: Math.random() * 25,
        name: name,
        age: age
    }

    users.push(user);

    res.send(users);

})

// Update a user by id

app.put("/user/:id", (req, res) =>{
    const id = req.params.id;

    const user = users.find(user => user.id == id);

    if(!user) {
        res.status(404).json({message: "user does not exist"});
    }

    const keys = Object.keys(req.body);

    keys.forEach(key =>{
        if(!user[key]) {
            res.status(404).end({message: "Invalid key"});
        }

        user[key] = req.body[key];
    });

    res.json(users);
})

// delete a user by particular id

app.delete("/user/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find(user => user.id == id);

    if (!user) {
        res.status(404).json({message: "user does not exist"});
    }

    const index = users.findIndex(user => user.id == id);

    console.log("index", index);

    users.splice(index, 1);

    res.json(users);
})

routes(app);
userRoutes(app);
// sql ---- tabular format
// mongodb --- nonrelational database

// server ------- mongodb

// mongoose 

