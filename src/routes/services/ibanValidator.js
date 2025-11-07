import * as IBAN from "iban";

export function validateIBAN(code) {
  try {
    const valid = IBAN.isValid(code);
    return { valid, formatted: valid ? IBAN.printFormat(code, " ") : null };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}
