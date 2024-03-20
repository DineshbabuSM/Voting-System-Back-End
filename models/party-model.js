const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
  PartyName: {
    type: String,
    required: [true, "Party name is required"],
    max: [100, "Party name cannot be more than 100 characters"],
    unique: [true, "Party name already exists"],
  },
  PartyID: {
    type: String,
    required: [true, "Party ID is required"],
    max: [50, "Party ID cannot be more than 50 characters"],
    unique: [true, "Party ID already exists"],
  },
  PartyImage: {
    type: String,
    required: [true, "Party Image is required"],
  },
  CreatedOn: {
    type: Date,
    required: [true, "Party CreatedOn is required"],
    default: Date.now(),
  },
  totalVotes: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('partyData', partySchema);
