import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios
    .post(
      API_URL + "signup",
      {
        username,
        email,
        password,
      },
      { headers: {
        "Content-type" : "application/json"
      } }
    );
};

const login = async (username, password) => {
  const data = await axios.get("http://localhost:8080");
  
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    },{ headers: {
      "Content-type" : "application/json"
    } })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((e) => {
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  logout,
  login,
  register,
};
