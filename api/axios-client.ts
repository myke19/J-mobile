import axios from "axios";


const baseUrl = "https://jsonplaceholder.typicode.com";

const axiosClient = axios.create({
    baseURL: baseUrl, //"https://api.example.com",
    timeout: 10000,
    headers: {
        "content-Type": "application/json",
    },
});

export const fetchPostsData = async () => {
    try {
        const response = await axiosClient.get("/posts");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const postData = async (userData: any) => {
    try {
        const response = await axiosClient.post("/users", userData);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const userData = { name: "John Doe", email: "john.doe@example.com" };

postData(userData);