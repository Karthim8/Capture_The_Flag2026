// const express = require("express");
// const Flag = require("../models/Flag"); // Import the Flag model
// const router = express.Router();

// // Add a new challenge flag
// router.post("/", async (req, res) => {
//     try {
//         const { challenge_id, flag, score } = req.body;

//         // Validate input
//         if (!challenge_id || !flag || score === undefined) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         const newFlag = new Flag({ challenge_id, flag, score });
//         await newFlag.save();

//         res.status(201).json({ message: "Challenge flag added successfully!" });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // Get all challenge flags
// // router.get("/", async (req, res) => {
// //     try {
// //         const flags = await Flag.find();
// //         res.json(flags);
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // });

//



// module.exports = router;


//encrypt
const express = require("express");
const bcrypt = require("bcryptjs");
const Flag = require("../models/Flag");
const router = express.Router();

// ✅ Add a new challenge flag (hashed)
//Add a new challenge flag
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

// ✅ 1️⃣ Verify Flag API
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

// ✅ 2️⃣ Get Flag & Score API
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
