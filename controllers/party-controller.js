const partySchema = require("../models/party-model");

const getPartyData = async (req, res) => {
  try {
    const party = await partySchema.find({}).limit(50);

    res.status(200).json(party);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const partyRegister = async (req, res) => {
  try {
    const partyData = await partySchema.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        partyData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = { getPartyData, partyRegister };
