import axios from "axios";
import checkCompletion from "./compstatus";

/**
 * Verifies the flag entered by the user.
 */
const flagVerify = async (challenge_id, userEnteredFlag) => {
    try {
        const loggedInTeam = localStorage.getItem("loggedInTeam");

        if (!loggedInTeam) {
            console.error("❌ No team logged in.");
            return false;
        }

        const isCompleted = await checkCompletion(loggedInTeam, challenge_id);
        if (isCompleted) {
            console.warn("⚠️ Challenge already completed.");
            return false;
        }

        // ✅ Use updated verification API
        const response = await axios.get(`/api/flags/verify/${challenge_id}/${userEnteredFlag}`);

        if (!response.data.isCorrect) {
            console.warn("❌ Incorrect flag.");
            return false;
        }

        // ✅ Fetch challenge score
        const scoreResponse = await axios.get(`/api/flags/${challenge_id}`);
        const { score: challengeScore } = scoreResponse.data;

        // ✅ Fetch team score
        const teamScoreResponse = await axios.get(`/api/register/get-score/${loggedInTeam}`);
        const { scores: currentScore } = teamScoreResponse.data;

        // ✅ Update team score
        const newScore = currentScore + challengeScore;
        await axios.put(`/api/register/update-score/${loggedInTeam}`, { scores: newScore });

        // ✅ Mark challenge as completed
        await axios.post("/api/completed", {
            team_id: loggedInTeam,
            challenge_id: challenge_id,
            time: new Date().toISOString(),
            score: challengeScore,
            __v: 0
        });

        console.log("✅ Flag correct! Score updated and challenge marked as completed.");
        return true;
    } catch (error) {
        console.error("❌ Error verifying flag:", error);
        return false;
    }
};

export default flagVerify;

