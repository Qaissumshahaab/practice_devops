const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api/giveHello", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(3000);
