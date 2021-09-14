const express = require("express")
const axios = require("axios")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get("/", (req, res) => {
  res.json({ status: "Welcome User" })
})

app.get("/random/dog", async (req, res) => {
  let resp = await axios.get("https://random.dog/woof.json");
  let ext = path.extname(resp.data.url);
  let obj = resp.data;
  obj["ext"] = ext;
  res.json(obj);
});

app.get("/random/dog/url", async (req, res) => {
  let resp = await axios.get("https://random.dog/woof.json");
  res.json(resp.data.url);
});

app.listen(3000, () => console.log("http://localhost:3000"))