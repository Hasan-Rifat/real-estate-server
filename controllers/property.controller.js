const {
  getPropertyService,
  createPropertyService,
  updatePropertyService,
  deletePropertyService,
} = require("../services/propertyService");

exports.getProperty = async (req, res) => {
  try {
    const result = await getPropertyService();
    res.send(200).json({
      status: "success",
      message: "Property data get successfully",
      data: result,
    });
  } catch (error) {
    res.send(400).json({
      status: "fail",
      message: "technical error",
      error: error.message,
    });
  }
};

exports.createProperty = async (req, res) => {
  try {
    const result = await createPropertyService(req.body);
    res.send(200).json({
      status: "success",
      message: "Property successfully created",
      data: result,
    });
  } catch (error) {
    res.send(400).json({
      status: "fail",
      message: "technical error",
      error: error.message,
    });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updatePropertyService(id, req.body);
    res.send(200).json({
      status: "success",
      message: "Property successfully updated",
      data: result,
    });
  } catch (error) {
    res.send(400).json({
      status: "fail",
      message: "technical error",
      error: error.message,
    });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deletePropertyService(id);
    res.send(200).json({
      status: "success",
      message: "Property is deleted successfully",
      data: result,
    });
  } catch (error) {
    res.send(400).json({
      status: "fail",
      message: "technical error",
      error: error.message,
    });
  }
};
