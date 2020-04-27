import { useState } from 'react';
import schools from '../api/schools';

export default () => {
    const [schoolList, setSchoolsList] = useState([]);

    // call API for school data
    const getSchools = async () => {
        try {
            const response = await schools.get();
            setSchoolsList(response.data);
        } catch (err) {
            console.log("Error in retrieving JSON data." + err)
        }
    };

    return [getSchools, schoolList];
};