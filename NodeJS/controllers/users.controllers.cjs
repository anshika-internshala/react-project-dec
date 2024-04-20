const userModel = require("../model/users.model.cjs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
    const { fullName, email, password} = req.body;

    const newUser = new userModel({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
    });

    userModel.findOne({email}).then((data) => {
        if (data) {
            return res.status(400).send({message: "user already exists"});
        } else {
            newUser.save().then(data => {
                res.status(200).send({message: "user registered successfully"});
            })
        }
    }).catch((err) => {
        return res.status(500).send({
            message: err.message || "some error occurred while registering"
        })
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    userModel.findOne({email}).then((data) => {
        if(!data) {
            return res.status(404).json({message: "user is not registered"});
    }

    let isValidPassword = bcrypt.compareSync(password, data.password);

    if(!isValidPassword) {
        res.status(401).send({message: "Invalid password"});
    }

    let token = jwt.sign({id: data._id}, "secretKey", {expiresIn: "1h"});

    res.send({
        user: {
            id: data._id,
            email: data.email,
            fullName: data.fullName
        },
        accessToken: token
    })

}).catch(err => {
    res.status(500).send({message: "server not running"});
})
};