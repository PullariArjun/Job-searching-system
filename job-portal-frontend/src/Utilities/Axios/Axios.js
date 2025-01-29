import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8080", // Replace with your API's base URL
    timeout: 30000, // Request timeout in milliseconds
    headers: {
        "Content-Type": "application/json", // Default headers
        //   Authorization: `Bearer ${localStorage.getItem('token')}`, // Example: Attach a token
    },
});
export default Axios;
