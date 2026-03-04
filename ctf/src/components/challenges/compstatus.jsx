import axios from "axios";

const checkCompletion = async (team_id, challenge_id) => {
    try {
        const response = await axios.get(`api/completed/${team_id}/${challenge_id}`);
        return response.data.success;
    } catch (error) {
        console.error("Error fetching data:", error);
        return false;
    }
};

export default checkCompletion;
