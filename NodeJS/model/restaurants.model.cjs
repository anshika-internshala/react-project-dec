const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    avgRating: Number,
    cuisines: Array,
    cloudinaryImageId: String,
    costForTwo: String,
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;


