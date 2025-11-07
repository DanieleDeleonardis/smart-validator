import validateVATNumber from "validate-vat";

export function validateVAT(vat) {
  return new Promise((resolve) => {
    validateVATNumber(vat, (err, info) => {
      if (err) return resolve({ valid: false, error: err.message });
      resolve({
        valid: info.valid,
        countryCode: info.countryCode,
        vatNumber: info.vatNumber
      });
    });
  });
}
