const partySchema = require("../models/party-model");
const pollingSchema = require("../models/polling-model");

const postPollingData = async (req, res) => {
  try {
    const newParty = await pollingSchema.create(req.body);

    const partyInfo = await partySchema.findOne({ PartyName: req.body.PartyName});
    partyInfo.totalVotes += 1;
    await partyInfo.save();

    res.status(201).json({
      status: "success",
      data: {
        party: newParty,
      },
    });
    
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const pollingPartyCount = async (req, res) => {
  try {
    const partyCount = await partySchema.find().sort({ totalVotes: -1 }).limit(3);
    res.status(200).json(partyCount);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = { postPollingData, pollingPartyCount };
