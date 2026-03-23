export type CreateRuleInput = {
  name: string
  limit: number
  window: number
  algorithm?: string
  policy?: Record<string, any>
  abuse?: Record<string, any>
}

export type UpdateRuleInput = Partial<CreateRuleInput>