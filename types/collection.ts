import {Database} from "~/types/supabase";
import WebSocket_2 from "vite";

export type Actuality = Database["public"]["Tables"]["actualities"]["Row"]
export type ActualityType = Database["public"]["Tables"]["actuality_types"]["Row"]

export type Balloon = Database["public"]["Tables"]["balloons"]["Row"]

export type Car = Database["public"]["Tables"]["cars"]["Row"]

export type CurrencyType = Database["public"]["Tables"]["currency_types"]["Row"]

export type Customer = Database["public"]["Tables"]["customers"]["Row"]

export type ExpenseType = Database["public"]["Tables"]["expense_types"]["Row"]
export type Expense = Database["public"]["Tables"]["expenses"]["Row"]

export type ExtendedUser = Database["public"]["Tables"]["extended_users"]["Row"]
export type ExtendedUserRole = Database["public"]["Tables"]["extended_user_roles"]["Row"]

export type FlightStatus = Database["public"]["Tables"]["flight_status"]["Row"]
export type FlightType = Database["public"]["Tables"]["flight_types"]["Row"]
export type Flight = Database["public"]["Tables"]["flights"]["Row"]

export type FlightTicket = Database["public"]["Tables"]["flight_tickets"]["Row"]

export type LocationType = Database["public"]["Tables"]["location_types"]["Row"]

export type MarketingExpense = Database["public"]["Tables"]["marketing_expenses"]["Row"]
export type MarketingRevenue = Database["public"]["Tables"]["marketing_revenues"]["Row"]
export type MarketingType = Database["public"]["Tables"]["marketing_types"]["Row"]

export type Order = Database["public"]["Tables"]["orders"]["Row"]

export type Reservation = Database["public"]["Tables"]["reservations"]["Row"]

export type TimeAvailability = Database["public"]["Tables"]["time_availability"]["Row"]

export type VoucherStatus = Database["public"]["Tables"]["voucher_status"]["Row"]
export type Voucher = Database["public"]["Tables"]["vouchers"]["Row"]
