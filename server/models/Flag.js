// const mongoose = require("mongoose");

// const FlagSchema = new mongoose.Schema({
//     challenge_id: { type: String, required: true, unique: true },
//     flag: { type: String, required: true },
//     score: { type: Number, required: true }
// });

// module.exports = mongoose.model("Flag", FlagSchema);


//encrypted

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const FlagSchema = new mongoose.Schema({
    challenge_id: { type: String, required: true, unique: true },
    flag: { type: String, required: true }, // Hashed flag
    score: { type: Number, required: true }
});

// Pre-save middleware to hash flag before saving
FlagSchema.pre("save", async function (next) {
    if (!this.isModified("flag")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.flag = await bcrypt.hash(this.flag, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("Flag", FlagSchema);
