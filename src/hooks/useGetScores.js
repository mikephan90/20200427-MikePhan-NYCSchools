import { useState } from 'react';
import scores from '../api/scores';

export default () => {
    const [score, setScores] = useState([]);

    // call API for score data
    const getScores = async () => {
        try {
            const response = await scores.get();
            setScores(response.data);
        } catch (err) {
            console.log("Error in retrieving JSON data." + err)
        }
    };

    return [getScores, score];
};