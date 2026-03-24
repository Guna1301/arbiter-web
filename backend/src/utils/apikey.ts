import crypto from "crypto";

export const generateApiKey = () => {
  const random = crypto.randomBytes(32).toString("hex"); 

  const prefix = "arb_live";
  const key = `${prefix}_${random}`;

  const hash = crypto
    .createHash("sha256")
    .update(key)
    .digest("hex");

  const last4 = random.slice(-4);

  return {
    key,
    hash,
    prefix,
    last4
  };
};