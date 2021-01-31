const { default: axios } = require("axios");

//TODO: Handle error
exports.signin = async (req, res) => {
  const { username, password } = req.body;
  const response = await axios.post(
    process.env.AUTH_API,
    {
      username: username,
      password: password,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return res.send(response.data);
};
exports.signup = async (req, res) => {
  const { email, username, password, confirmpassword } = req.body;

  const response = await axios.post(
    process.env.AUTH_API,
    {
      username: username,
      password: password,
      email: email,
      confirmpassword: confirmpassword,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return res.send(response.data);
};
