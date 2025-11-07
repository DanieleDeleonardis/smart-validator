import validator from "validator";

export function validateEmail(email) {
  const valid = validator.isEmail(email);
  const domain = valid ? email.split("@")[1] : null;
  return { valid, domain };
}
