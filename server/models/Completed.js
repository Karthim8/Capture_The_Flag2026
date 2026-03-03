const mongoose = require("mongoose");

const CompletedSchema = new mongoose.Schema({
    team_id: { type: Number, required: true },
    challenge_id: { type: String, required: true },
    time: { type: Date, default: Date.now },
    score: { type: Number, required: true }
});

module.exports = mongoose.model("Completed", CompletedSchema);

