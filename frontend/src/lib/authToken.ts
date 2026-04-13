type TokenGetter = (options?: any) => Promise<string | null>;

let authTokenGetter: TokenGetter | null = null;


export function setAuthTokenGetter(getter: TokenGetter) {
  authTokenGetter = getter;
}



export async function getAuthToken(): Promise<string | null> {
  if (!authTokenGetter) return null;
  return await authTokenGetter();
}