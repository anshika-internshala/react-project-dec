const jwt = require("jsonwebtoken");
const userModel = require("../model/users.model.cjs");

const verifyToken = (req, res, next) => {
  console.log("verify token......");
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretKey",
      function (err, verifiedToken) {
        if (err) {
            res.status(401).json({message: "Invalid JWT Token"});
        }
        console.log(verifiedToken);

        userModel.findById(verifiedToken._id)
            .then(user => {
                req.user = user;
                next();
            }).catch(err => {
                res.status(500).json({message: "server not available"});
            })
      }
    );
  } else {
    res.status(403).json({message: "token not present"});
  }
};

module.exports = verifyToken;
