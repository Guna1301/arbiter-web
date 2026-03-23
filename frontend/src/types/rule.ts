export interface Rule {
    id: string
    name: string
    limit: number
    window: number
    algorithm?: string
    policy?: Record<string, any>
    abuse?: Record<string, any>
}

export type UpdateRuleInput = {
  name?: string
  limit?: number
  window?: number
  algorithm?: string
  policy?: Record<string, any>
  abuse?: Record<string, any>
}