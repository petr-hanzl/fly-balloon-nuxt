import {Database} from "~/types/supabase";

export type Actuality = Database["public"]["Tables"]["actualities"]["Row"]

export type Balloon = Database["public"]["Tables"]["balloons"]["Row"]

export type ExpenseType = Database["public"]["Tables"]["expense_types"]["Row"]
export type Expense = Database["public"]["Tables"]["expenses"]["Row"]

export type FlightStatus = Database["public"]["Tables"]["flight_status"]["Row"]
export type FlightType = Database["public"]["Tables"]["flight_types"]["Row"]
export type Flight = Database["public"]["Tables"]["flights"]["Row"]

export type MarketingType = Database["public"]["Tables"]["marketing_types"]["Row"]
export type MarketingExpense = Database["public"]["Tables"]["marketing_expenses"]["Row"]
export type MarketingRevenue = Database["public"]["Tables"]["marketing_revenues"]["Row"]

export type Order = Database["public"]["Tables"]["orders"]["Row"]


