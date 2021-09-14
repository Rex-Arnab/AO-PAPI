const fastify = require("fastify")
const axios = require("axios")
const path = require("path")

const app = fastify({
  logger: true
})

app.get("/random/dog", async (req, res) => {
  let resp = await axios.get("https://random.dog/woof.json");
  let ext = path.extname(resp.data.url);
  let obj = resp.data;
  obj["ext"] = ext;
  res.send(obj);
})

app.listen(3000, () => console.log("http://localhost:3000"))