import crypto from "crypto";

export const generateApiKey = () => {

  const random = crypto.randomBytes(24).toString("hex");

  const key = `arb_live_${random}`;

  const hash = crypto
    .createHash("sha256")
    .update(key)
    .digest("hex");

  return {
    key,
    hash,
    prefix: "arb_live"
  };
};