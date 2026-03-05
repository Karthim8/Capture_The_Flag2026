const express = require("express");
const bcrypt = require("bcryptjs");
const Flag = require("../models/Flag");
const router = express.Router();

// ✅ Get all challenge flags
router.get("/", async (req, res) => {
    try {
        const flags = await Flag.find();
        res.json(flags);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Add a new challenge flag (hashed)
router.post("/", async (req, res) => {
    try {
        const { challenge_id, flag, score } = req.body;

        // Validate input
        if (!challenge_id || !flag || score === undefined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newFlag = new Flag({ challenge_id, flag, score });
        await newFlag.save();

        res.status(201).json({ message: "Challenge flag added successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ Verify Flag API
router.get("/verify/:challenge_id/:userGivenFlag", async (req, res) => {
    try {
        const { challenge_id, userGivenFlag } = req.params;

        const flagData = await Flag.findOne({ challenge_id });

        if (!flagData) {
            return res.status(404).json({ error: "Challenge not found" });
        }

        // Compare hashed flag
        const isMatch = await bcrypt.compare(userGivenFlag, flagData.flag);

        res.json({ isCorrect: isMatch });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get Flag & Score API (by challenge_id)
router.get("/:challenge_id", async (req, res) => {
    try {
        const { challenge_id } = req.params;

        const flagData = await Flag.findOne({ challenge_id });

        if (!flagData) {
            return res.status(404).json({ error: "Challenge not found" });
        }

        res.json({ flag: flagData.flag, score: flagData.score });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
