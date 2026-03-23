export function pickDefined(obj: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined)
  );
}

export function getSafeRuleData(data: any) {
  return pickDefined({
    name: data.name,
    limit: data.limit,
    window: data.window,
    algorithm: data.algorithm,
    policy: data.policy,
    abuse: data.abuse
  });
}