var axios = require("axios");
var path = require("path");
// Stateless Function Here
module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000);
  let resp = await axios.get("https://random.dog/woof.json");
  let ext = path.extname(resp.data.url);
  let obj = resp.data;
  obj["ext"] = ext;
  res.json(obj);
};
