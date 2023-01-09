const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  propertyTitle: {
    type: String,
    require: [true, "property Title is required"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "description is required"],
    trim: true,
  },
  propertyType: {
    type: String,
    require: [true, "property type is required"],
    trim: true,
  },
  status: {
    type: String,
    require: [true, "status is required"],
    trim: true,
  },
  label: {
    type: String,
    require: [true, "label is required"],
    trim: true,
  },
  saleOrRentPrice: {
    type: Number,
    require: [true, "sale Or RentPrice is required"],
    trim: true,
  },
  secondPrice: {
    type: Number,
    require: [true, "second Price is required"],
    trim: true,
  },
  afterThePrice: {
    type: Number,
    require: [true, "after The Price is required"],
    trim: true,
  },
  imageUrl: {
    type: String,
    require: [true, "image url is required"],
    trim: true,
  },
  bedrooms: {
    type: Number,
    require: [true, "bedrooms is required"],
    trim: true,
  },
  bathrooms: {
    type: Number,
    require: [true, "bathrooms is required"],
    trim: true,
  },
  areaSize: {
    type: Number,
    require: [true, "areaSize is required"],
    trim: true,
  },
  sizePostfix: {
    type: String,
    require: [true, "size Postfix is required"],
    trim: true,
  },
  landArea: {
    type: String,
    require: [true, "landArea is required"],
    trim: true,
  },
  landAreaSizePostfix: {
    type: String,
    require: [true, "landArea Size Postfix is required"],
    trim: true,
  },
  garages: {
    type: Number,
    require: [true, "garages is required"],
    trim: true,
  },
  garageSize: {
    type: String,
    require: [true, "garage Size is required"],
    trim: true,
  },
  propertyID: {
    type: String,
    require: [true, "property ID is required"],
    trim: true,
  },
  yearBuilt: {
    type: Number,
    require: [true, "yearBuilt is required"],
    trim: true,
  },
  airConditioning: {
    type: String,
    require: [true, "Air Conditioning is required"],
  },
  barbeque: {
    type: String,
    require: [true, "Barbeque is required"],
  },
  dryer: {
    type: String,
    require: [true, "Dryer is required"],
  },
  gym: {
    type: String,
    require: [true, "Gym is required"],
  },
  laundry: {
    type: String,
    require: [true, "Laundry is required"],
  },
  lawn: {
    type: String,
    require: [true, "Lawn is required"],
  },
  microwave: {
    type: String,
    require: [true, "Microwave is required"],
  },
  outdoorShower: {
    type: String,
    require: [true, "outdoorShower is required"],
  },
  Refrigerator: {
    type: String,
    require: [true, "Refrigerator is required"],
  },
  Sauna: {
    type: String,
    require: [true, "Sauna is required"],
  },
  swimmingPool: {
    type: String,
    require: [true, "Swimming Pool is required"],
  },
  tVCable: {
    type: String,
    require: [true, "TV Cable Pool is required"],
  },
  washer: {
    type: String,
    require: [true, "washer is required"],
  },
  wiFi: {
    type: String,
    require: [true, "WiFi is required"],
  },
  windowCoverings: {
    type: String,
    require: [true, "Window Coverings is required"],
  },
  address: {
    type: String,
    require: [true, "address is required"],
  },
  country: {
    type: String,
    require: [true, "country is required"],
  },
  stateCounty: {
    type: String,
    require: [true, "stateCounty is required"],
  },
  city: {
    type: String,
    require: [true, "city is required"],
  },
  area: {
    type: String,
    require: [true, "area is required"],
  },
  zipOrPostalCode: {
    type: String,
    require: [true, "zip Or Postal Code is required"],
  },
  mapLatitude: {
    type: Number,
    require: [true, "map Latitude is required"],
  },
  mapLongitude: {
    type: Number,
    require: [true, "map Longitude is required"],
  },
  featured: {
    type: String,
    require: [true, "featured is required"],
  },
  viewProperty: {
    type: String,
    require: [true, "view Property is required"],
  },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
