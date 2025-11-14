import express from "express";
import { validateEmail } from "./services/emailValidator.js";
import { validatePhone } from "./services/phoneValidator.js";
import { validateIBAN } from "./services/ibanValidator.js";
import { validateVAT } from "./services/vatValidator.js";
import { validateCF } from "./services/cfValidator.js";

import { rateLimiter } from "../middleware/auth.js";

const router = express.Router();
router.use(rateLimiter);

router.post("/", async (req, res) => {
  const { email, phone, iban, vat, cf } = req.body;
  const result = {};

  if (email) result.email = await validateEmail(email);
  if (phone) result.phone = await validatePhone(phone);
  if (iban) result.iban = await validateIBAN(iban);
  if (vat) result.vat = await validateVAT(vat);
  if (cf) result.cf = await validateCF(cf);

  if (Object.keys(result).length === 0) {
    return res.status(400).json({ error: "Nessun campo da validare." });
  }

  res.json(result);
});

export default router;
