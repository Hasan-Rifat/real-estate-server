const express = require("express");
const property = require("../../controllers/property.controller");
const router = express.Router();

router.route("/").get(property.getProperty).post(property.createProperty);
router
  .route("/:id")
  .get(property.getPropertyById)
  .patch(property.updateProperty)
  .delete(property.deleteProperty);

module.exports = router;
