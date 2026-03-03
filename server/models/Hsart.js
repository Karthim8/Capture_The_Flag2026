const mongoose = require("mongoose");

const hsartSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    d: { type: String, required: true }
});

const Hsart = mongoose.model("hsart", hsartSchema);
module.exports = Hsart;
