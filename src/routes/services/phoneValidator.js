import { parsePhoneNumberFromString } from "libphonenumber-js";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();
export function validatePhone(phone) {
  try {
    const num = phoneUtil.parse(phone);
    // const num = parsePhoneNumberFromString(phone);
    if (!num) return { valid: false };
    return {
      valid: num.isValid(),
      country: phoneUtil.getRegionCodeForNumber(num), // num.country,
      format: num.formatInternational()
    };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}
