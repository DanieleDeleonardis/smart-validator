import express from "express";
import cors from "cors";
import validateRouter from "./src/routes/validate.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Smart Validator API attiva ✅" );
});

// Rotta principale
app.use("/validate", validateRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Smart Validator API in ascolto su http://localhost:${PORT}`);
});
