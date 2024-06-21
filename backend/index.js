const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
 try{ const r = await axios.put(
    "https://api.chatengine.io/users/",
    { username: username, secret: username, first_name: username },
    { headers: { "Private-Key": " fc40a4a3-fae8-4bec-a09b-1fd25dbd7a22" } }
  );
  return res.status(r.status).json(r.data);
} catch (e) {
  return res.status(e.response.status).json(e.response.data);
}
});

app.listen(3001);