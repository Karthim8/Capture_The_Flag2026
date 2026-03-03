const express = require("express");
const Completed = require("../models/Completed"); // Import the Completed model
const router = express.Router();

// POST - Add a new completed challenge
router.post("/", async (req, res) => {
    try {
        const { team_id, challenge_id, time, score } = req.body;

        // Validate input
        if (!team_id || !challenge_id || score === undefined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newCompleted = new Completed({ team_id, challenge_id, time, score });
        await newCompleted.save();

        res.status(201).json({ message: "Challenge marked as completed!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET - Check if a team has completed a challenge
router.get("/:team_id/:challenge_id", async (req, res) => {
    try {
        const { team_id, challenge_id } = req.params;

        const completed = await Completed.findOne({ team_id, challenge_id });

        if (!completed) {
            return res.json({ success: false });
        }

        return res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
