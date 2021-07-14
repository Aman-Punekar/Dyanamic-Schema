const Student = require("../models/studentSchema");

const addDetails = async (req, res) => {
  try {
    let result = await Student.insertMany(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ msg: "Operation failed" });
  }
};

const updateDetails = async (req, res) => {
  try {
    let result = await Student.findByIdAndUpdate(
      { "_id": req.body._id },
      req.body
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ msg: "Operation failed" });
  }
};

const getDetails = async (req, res) => {
  try {
    let result = await Student.findById({ "_id": req.body._id });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ msg: "Operation failed" });
  }
};

const updateSociety = async (req, res) => {
  try {
    const result = Student.findByIdAndUpdate(
      { "_id": req.body._id },
      { "$push": { society: { "$each": req.body.society } } }
    );
  } catch (err) {
    res.status(500).send({ msg: "Operation failed" });
  }
};

module.exports = { addDetails, updateDetails, getDetails, updateSociety };
