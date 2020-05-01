const axios = require("axios");

export const getData = () => {
  return axios
    .get("http://localhost:8888/insights/")
    .then((res) => {
      console.log(res)
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
