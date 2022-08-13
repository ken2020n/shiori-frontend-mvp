import axios from "axios";

const API_HOST_URL = "http://localhost:3000";

// const register = async () => {
//     return axios.get(`${API_HOST_URL}/user/register`);
// };

const login = async (email, password) => {
    try {
        return await axios.post(`${API_HOST_URL}/user/login`, {
            "email": email,
            "password": password
        });
    } catch (err) {
        return err.response;
    }
};

const createGoal = async (userId, title) => {
    try {
        return await axios.post(`${API_HOST_URL}/goal/create`, {
            "user_id": userId,
            "title": title
        });
    } catch (err) {
        return err.response;

    }
}

const getGoals = async (userId) => {
    try {
        return await axios.get(`${API_HOST_URL}/goals/${userId}`)
    } catch (err) {
        return err.response;
    }
}

export {
    // register,
    login,
    createGoal,
    getGoals
};