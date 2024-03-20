const mongoose = require("mongoose");
const partySchema = require("./party-model");

const pollingSchema = new mongoose.Schema({
  PartyName: {
    type: String,
    required: [true, "Party Name is required"],
    validate:{
      validator: async function(value) {
        const party = await partySchema.findOne({ PartyName : value });
        if(!party) return false;
      },
      message: props => `${props.value} is not a valid Party Name!`
    },
    caseSensitive: false
  },
  EVId: {
    type: String,
    required: [true, "EVId is required"],
  },
  VotingId: {
    type: String,
    required: [true, "VotingId is required"],
    unique: [true, "You have already casted your vote"]
  },
  PolledOn: {
    type: Date,
    default: Date.now,
    immutable: true
  },
});

module.exports = mongoose.model("pollingData", pollingSchema);
