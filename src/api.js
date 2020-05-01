const axios = require("axios");

export const getData = () => {
  return axios
    .get("http://localhost:8888/insights/")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
