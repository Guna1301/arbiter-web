import { api } from "../lib/api";
import type { ApiKey } from "../types/apikey";

export const getApiKeys = async (projectId: string): Promise<ApiKey[]> => {
  const res = await api.get(`/apikeys/${projectId}`);
  return res.data;
};

export const createApiKey = async (
  projectId: string,
  name: string
): Promise<{ apiKey: string }> => {
  const res = await api.post(`/apikeys/${projectId}`, { name });
  return res.data;
};

export const revokeApiKey = async (keyId: string) => {
  return api.patch(`/apikeys/revoke/${keyId}`);
};