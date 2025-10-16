import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// biar bisa parsing data dari form
app.use(bodyParser.urlencoded({ extended: true }));

// folder public buat serve file html/css/js
app.use(express.static("public"));

// route login
app.post("/auth", (req, res) => {
  const { username, key } = req.body;

  // ubah sesuai kebutuhan kamu
  const VALID_USER = "admin";
  const VALID_KEY = "voltage123";

  if (username === VALID_USER && key === VALID_KEY) {
    res.redirect("/?msg=Login berhasil bro🔥");
  } else {
    res.redirect("/?msg=Login gagal, periksa kembali⚠️");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
