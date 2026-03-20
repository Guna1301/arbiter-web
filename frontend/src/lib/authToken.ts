let getTokenFn: (() => Promise<string | null>) | null = null;

export const setAuthTokenGetter = (fn: () => Promise<string | null>) => {
  getTokenFn = fn;
};

export const getAuthToken = async (): Promise<string | null> => {
  if (!getTokenFn) return null;
  return await getTokenFn();
};