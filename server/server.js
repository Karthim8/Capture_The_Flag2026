const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Register = require("./models/Register"); 
const app = express();
const hsartRoutes = require("./routes/hsartRoutes"); 


// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit if MongoDB connection fails
    });

// Default Route
app.get("/", (req, res) => {
    res.send("✅ Server is up and running!");
});

// Routes
try {
    const authRoutes = require("./routes/auth");
    app.use("/api/auth", authRoutes);
} catch (err) {
    console.error("❌ Error loading authRoutes:", err);
}

try {
    const registerRoutes = require("./routes/register");
    app.use("/api/register", registerRoutes);
} catch (err) {
    console.error("❌ Error loading registerRoutes:", err);
}
try {
    const flagRoutes = require("./routes/flags");
    app.use("/api/flags", flagRoutes);
} catch (err) {
    console.error("❌ Error loading flagRoutes:", err);
}
app.use("/api/hsart", hsartRoutes);

// Add Completed Collection
try {
    const completedRoutes = require("./routes/completed");
    app.use("/api/completed", completedRoutes);
} catch (err) {
    console.error("❌ Error loading completedRoutes:", err);
}

// Handle 404 for Undefined Routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route Not Found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

const updateRanks = async () => {
    try {
        const teams = await Register.find().sort({ scores: -1 }); // Sort by scores (Descending)

        for (let i = 0; i < teams.length; i++) {
            await Register.findByIdAndUpdate(teams[i]._id, { rank: i + 1 }); // Assign rank based on position
        }

        //console.log("✅ Ranks updated based on scores");
    } catch (err) {
        console.error("❌ Error updating ranks:", err);
    }
};


// Run every 1 minute
setInterval(updateRanks, 10 * 1000);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running on port ${PORT}`));


