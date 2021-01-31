exports.getAllCafes = async (req, res) => {
  const response = await axios({
    url: process.env.DATA_API,
    method: "post",
    data: {
      query: `
                query GetCafes {
                    allCafees{
                        id
                        name
                        longitude
                        latitude
                        vicinity
                    }
                  }
                `,
    },
  });
  return res.send(response.data);
};
