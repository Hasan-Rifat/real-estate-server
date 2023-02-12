const Property = require("../model/Property");

exports.getPropertyService = async () => {
  const data = await Property.where({});
  return data;
};
exports.getPropertyServiceById = async (id) => {
  const data = await Property.where({ _id: id });
  return data;
};

exports.createPropertyService = async (data) => {
  const result = await Property.create(data);
  return result;
};

exports.updatePropertyService = async (id, data) => {
  const result = await Property.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

exports.deletePropertyService = async (id) => {
  const result = await Property.deleteOne({ _id: id });
  return result;
};
