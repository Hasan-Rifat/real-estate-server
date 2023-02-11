const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  feature: {
    type: String,
    require: [true, "feature is required"],
    trim: true,
  },
  img: {
    type: String,
    require: [true, "img is required"],
    trim: true,
  },
  title: {
    type: String,
    require: [true, "title is required"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "description is required"],
    trim: true,
  },
  address: {
    type: String,
    require: [true, "address is required"],
    trim: true,
  },
  city: {
    type: String,
    require: [true, "city is required"],
    trim: true,
  },
  state: {
    type: String,
    require: [true, "State is required"],
    trim: true,
  },
  zipPostalCode: {
    type: String,
    require: [true, "zipPostalCode is required"],
    trim: true,
  },
  area: {
    type: String,
    require: [true, "Area is required"],
    trim: true,
  },
  country: {
    type: String,
    require: [true, "country is required"],
    trim: true,
  },
  apartment: {
    type: String,
    require: [true, "apartment is required"],
    trim: true,
  },
  bedrooms: {
    type: Number,
    require: [true, "bedrooms is required"],
    trim: true,
  },
  bathrooms: {
    type: Number,
    require: [true, "Bathrooms is required"],
    trim: true,
  },
  garage: {
    type: Number,
    require: [true, "Garage is required"],
    trim: true,
  },
  yearBuilt: {
    type: Number,
    require: [true, "YearBuilt is required"],
    trim: true,
  },
  squareFt: {
    type: String,
    require: [true, "squareFt is required"],
    trim: true,
  },
  garageSize: {
    type: String,
    require: [true, "GarageSize is required"],
    trim: true,
  },
  price: {
    type: Number,
    require: [true, "price is required"],
    trim: true,
  },
  propertySize: {
    type: String,
    require: [true, "Property Size is required"],
    trim: true,
  },
  propertyType: {
    type: String,
    require: [true, "Property Type is required"],
    trim: true,
  },
  propertyStatus: {
    type: String,
    require: [true, "Property Status is required"],
    trim: true,
  },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
