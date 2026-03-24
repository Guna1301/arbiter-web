export interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  maskedKey: string;
  last4: string;
  status: string;
  createdAt: string;
  lastUsedAt?: string;
  expiresAt?: string;
}