export interface RuleMetrics{
    [rule: string]: number;
}

export interface AbuseKey{
    key: string;
    count: number;
}