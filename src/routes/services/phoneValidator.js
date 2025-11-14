import pkg from "google-libphonenumber";

const phoneUtil = pkg.PhoneNumberUtil.getInstance();
export function validatePhone(phone) {
  try {
    const num = phoneUtil.parse(phone);
    // const num = parsePhoneNumberFromString(phone);
    if (!num) return { valid: false };
    return {
      valid: phoneUtil.isValidNumber(num),
      country: phoneUtil.getRegionCodeForNumber(num), // num.country,
      format: num.formatInternational()
    };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}
