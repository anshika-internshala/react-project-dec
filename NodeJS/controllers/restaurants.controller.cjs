const restaurantModel = require("../model/restaurants.model.cjs");

exports.create = (req, res) => {

    const {
        name,
        avgRating,
        cuisines,
        cloudinaryImageId,
        costForTwo,
        menuItems
    } = req.body;

    const newRestaurant = new restaurantModel({
        name,
        avgRating,
        cuisines,
        cloudinaryImageId,
        costForTwo,
        menuItems
    });

    newRestaurant.save().then((data) => {
        if (!data) {
            res.status(400).send("something went wrong");
        }

        res.send(data);
    })
    .catch(err => res.status(500).json({message: "serevr not available"}));

}

exports.fetch = (req , res) => {
    restaurantModel.find().then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch((err) => res.status(500).json({message: "Server not available"}));
}

exports.fetchOne = (req ,res) => {
    const _id = req.params.id;

    restaurantModel.findById(_id).then(data => {
    
        res.send(data);
    }).catch((err) => res.status(404).json({message: "Data not found"}));
}

exports.updateOne = (req , res) => {

    const _id = req.params.id;
    restaurantModel.findByIdAndUpdate(_id, {avgRating: 3.8}, {new: true}).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch((err) => res.status(500).json({message: "Server not available"}));
}

exports.delete = (req , res) => {

    const _id = req.params.id;
    restaurantModel.findByIdAndDelete(_id).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch((err) => res.status(500).json({message: "Server not available"}));
}



