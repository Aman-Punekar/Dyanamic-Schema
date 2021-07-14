const express = require("express");
const router = express.Router();
const {
  addDetails,
  updateDetails,
  getDetails,
  updateSociety,
} = require("../controllers/studentData");

router.post("/addDetails", addDetails);
router.put("/updateDetails", updateDetails);
router.get("/getDetails/:userId", getDetails);
router.put("/updateSociety", updateSociety);

module.exports = router;
