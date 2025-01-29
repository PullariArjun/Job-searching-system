import Axios from "../Utilities/Axios/Axios";
const registerUser = async (user) => {
    return Axios.post("/users/register", user)
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        });
};

const loginUser = async (login) => {
    return Axios.post("/users/login", login)
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        });
};
const sendOtp = async (email) => {
    return Axios.post(`/users/sendOtp/${email}`)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};
const verifyOtp = async (email, otp) => {
    return Axios.get(`/users/verifyOtp/${email}/${otp}`)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};
const changePassword = async (email, password) => {
    Axios.post(`/users/changePassword`, { email, password })
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};
export { registerUser, loginUser, sendOtp, verifyOtp, changePassword };
