export type Frequency = "Annually" | "Monthly" | "Fortnightly" | "Weekly" | "Daily"

export type Money = number
export type Percent = number

export interface Strategy {
  initialDeposit: Money,
  regularDeposit: Money,
  depositFrequency: Frequency,
  compoundFrequency: Frequency,
  numberOfYears: number,
  annualInterestRate: number
}