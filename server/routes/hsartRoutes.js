const express = require("express");
const Hsart = require("../models/Hsart");
const router = express.Router();

// 🔹 POST: Add a new entry
router.post("/", async (req, res) => {
    try {
        const { id, d } = req.body;
        if (!id || !d) return res.status(400).json({ error: "All fields are required" });

        const newEntry = new Hsart({ id, d });
        await newEntry.save();

        res.status(201).json({ message: "✅ Entry added successfully!", data: newEntry });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 GET: Fetch all entries
// router.get("/", async (req, res) => {
//     try {
//         const entries = await Hsart.find();
//         res.json(entries);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// 🔹 GET: Fetch an entry by ID
router.get("/:id", async (req, res) => {
    try {
        const entry = await Hsart.findOne({ id: req.params.id });
        if (!entry) return res.status(404).json({ error: "Entry not found" });

        res.json(entry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
