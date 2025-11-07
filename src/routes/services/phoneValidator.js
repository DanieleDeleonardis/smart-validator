import { parsePhoneNumberFromString } from "libphonenumber-js";

export function validatePhone(phone) {
  try {
    const num = parsePhoneNumberFromString(phone);
    if (!num) return { valid: false };
    return {
      valid: num.isValid(),
      country: num.country,
      format: num.formatInternational()
    };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}
