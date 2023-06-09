export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      actualities: {
        Row: {
          actuality_type_id: number | null
          created_at: string | null
          creator_id: string | null
          header: string | null
          id: number
          text: string | null
        }
        Insert: {
          actuality_type_id?: number | null
          created_at?: string | null
          creator_id?: string | null
          header?: string | null
          id?: number
          text?: string | null
        }
        Update: {
          actuality_type_id?: number | null
          created_at?: string | null
          creator_id?: string | null
          header?: string | null
          id?: number
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "actualities_actuality_type_id_fkey"
            columns: ["actuality_type_id"]
            referencedRelation: "actuality_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "actualities_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      actuality_types: {
        Row: {
          created_at: string | null
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      balloons: {
        Row: {
          additional_information: string | null
          created_at: string | null
          id: number
          is_active: boolean | null
          maximum_capacity: number | null
          registration_number: string | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          maximum_capacity?: number | null
          registration_number?: string | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          maximum_capacity?: number | null
          registration_number?: string | null
        }
        Relationships: []
      }
      cars: {
        Row: {
          additional_information: string | null
          created_at: string | null
          id: number
          is_active: boolean | null
          name: string | null
          registration_number: string | null
          stk_expire: string | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          registration_number?: string | null
          stk_expire?: string | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          registration_number?: string | null
          stk_expire?: string | null
        }
        Relationships: []
      }
      currency_types: {
        Row: {
          created_at: string | null
          currency: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          id?: number
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: number
          last_name: string | null
          phone_number: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          phone_number?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          phone_number?: string | null
        }
        Relationships: []
      }
      driver_licence_types: {
        Row: {
          created_at: string | null
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      drivers: {
        Row: {
          created_at: string | null
          extended_user_id: number | null
          id: number
        }
        Insert: {
          created_at?: string | null
          extended_user_id?: number | null
          id?: number
        }
        Update: {
          created_at?: string | null
          extended_user_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "drivers_extended_user_id_fkey"
            columns: ["extended_user_id"]
            referencedRelation: "extended_users"
            referencedColumns: ["id"]
          }
        ]
      }
      drivers_license: {
        Row: {
          created_at: string | null
          drivers_id: number | null
          id: number
          licence_id: number | null
        }
        Insert: {
          created_at?: string | null
          drivers_id?: number | null
          id?: number
          licence_id?: number | null
        }
        Update: {
          created_at?: string | null
          drivers_id?: number | null
          id?: number
          licence_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "drivers_license_drivers_id_fkey"
            columns: ["drivers_id"]
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "drivers_license_licence_id_fkey"
            columns: ["licence_id"]
            referencedRelation: "driver_licence_types"
            referencedColumns: ["id"]
          }
        ]
      }
      expense_types: {
        Row: {
          created_at: string | null
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      expenses: {
        Row: {
          additional_information: string | null
          created_at: string | null
          currency_type_id: number | null
          expense_type_id: number | null
          flight_id: number | null
          id: number
          price: string | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          expense_type_id?: number | null
          flight_id?: number | null
          id?: number
          price?: string | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          expense_type_id?: number | null
          flight_id?: number | null
          id?: number
          price?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_currency_type_id_fkey"
            columns: ["currency_type_id"]
            referencedRelation: "currency_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_expense_type_id_fkey"
            columns: ["expense_type_id"]
            referencedRelation: "expense_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_flight_id_fkey"
            columns: ["flight_id"]
            referencedRelation: "flights"
            referencedColumns: ["id"]
          }
        ]
      }
      extended_users: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: number
          is_active: boolean | null
          last_name: string | null
          phone_number: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id?: number
          is_active?: boolean | null
          last_name?: string | null
          phone_number?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: number
          is_active?: boolean | null
          last_name?: string | null
          phone_number?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "extended_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      flight_status: {
        Row: {
          created_at: string | null
          id: number
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          status?: string | null
        }
        Relationships: []
      }
      flight_tickets: {
        Row: {
          created_at: string | null
          flight_type_id: number | null
          id: number
          number_of_flights: number | null
          number_of_people: number | null
          order_id: number | null
          ticket_number: number | null
          with_accomodation: boolean | null
        }
        Insert: {
          created_at?: string | null
          flight_type_id?: number | null
          id?: number
          number_of_flights?: number | null
          number_of_people?: number | null
          order_id?: number | null
          ticket_number?: number | null
          with_accomodation?: boolean | null
        }
        Update: {
          created_at?: string | null
          flight_type_id?: number | null
          id?: number
          number_of_flights?: number | null
          number_of_people?: number | null
          order_id?: number | null
          ticket_number?: number | null
          with_accomodation?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "flight_tickets_flight_type_id_fkey"
            columns: ["flight_type_id"]
            referencedRelation: "flight_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flight_tickets_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          }
        ]
      }
      flight_types: {
        Row: {
          created_at: string | null
          id: number
          maximum_capacity: number | null
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          maximum_capacity?: number | null
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          maximum_capacity?: number | null
          type?: string | null
        }
        Relationships: []
      }
      flights: {
        Row: {
          additional_information: string | null
          balloon_id: number | null
          created_at: string | null
          creator_id: string | null
          driver_id: number | null
          flight_status_id: number | null
          flight_type_id: number | null
          id: number
          is_full: boolean | null
          location_id: number | null
          pilot_id: number | null
          timestamp: string | null
        }
        Insert: {
          additional_information?: string | null
          balloon_id?: number | null
          created_at?: string | null
          creator_id?: string | null
          driver_id?: number | null
          flight_status_id?: number | null
          flight_type_id?: number | null
          id?: number
          is_full?: boolean | null
          location_id?: number | null
          pilot_id?: number | null
          timestamp?: string | null
        }
        Update: {
          additional_information?: string | null
          balloon_id?: number | null
          created_at?: string | null
          creator_id?: string | null
          driver_id?: number | null
          flight_status_id?: number | null
          flight_type_id?: number | null
          id?: number
          is_full?: boolean | null
          location_id?: number | null
          pilot_id?: number | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flights_balloon_id_fkey"
            columns: ["balloon_id"]
            referencedRelation: "balloons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_driver_id_fkey"
            columns: ["driver_id"]
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_flight_status_id_fkey"
            columns: ["flight_status_id"]
            referencedRelation: "flight_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_flight_type_id_fkey"
            columns: ["flight_type_id"]
            referencedRelation: "flight_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "location_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_pilot_id_fkey"
            columns: ["pilot_id"]
            referencedRelation: "pilots"
            referencedColumns: ["id"]
          }
        ]
      }
      location_types: {
        Row: {
          created_at: string | null
          id: number
          location: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          location?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          location?: string | null
        }
        Relationships: []
      }
      marketing_expenses: {
        Row: {
          additional_information: string | null
          created_at: string | null
          currency_type_id: number | null
          expense: number | null
          id: number
          marketing_type_id: number | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          expense?: number | null
          id?: number
          marketing_type_id?: number | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          expense?: number | null
          id?: number
          marketing_type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_expenses_currency_type_id_fkey"
            columns: ["currency_type_id"]
            referencedRelation: "currency_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketing_expenses_marketing_type_id_fkey"
            columns: ["marketing_type_id"]
            referencedRelation: "marketing_types"
            referencedColumns: ["id"]
          }
        ]
      }
      marketing_revenues: {
        Row: {
          additional_information: string | null
          created_at: string | null
          currency_type_id: number | null
          id: number
          marketing_type_id: number | null
          revenue: number | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          id?: number
          marketing_type_id?: number | null
          revenue?: number | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          id?: number
          marketing_type_id?: number | null
          revenue?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_revenues_currency_type_id_fkey"
            columns: ["currency_type_id"]
            referencedRelation: "currency_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketing_revenues_marketing_type_id_fkey"
            columns: ["marketing_type_id"]
            referencedRelation: "marketing_types"
            referencedColumns: ["id"]
          }
        ]
      }
      marketing_types: {
        Row: {
          created_at: string | null
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string | null
          customer_id: number | null
          id: number
          isPaid: boolean | null
          price: number | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: number | null
          id?: number
          isPaid?: boolean | null
          price?: number | null
        }
        Update: {
          created_at?: string | null
          customer_id?: number | null
          id?: number
          isPaid?: boolean | null
          price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "customers"
            referencedColumns: ["id"]
          }
        ]
      }
      pilots: {
        Row: {
          extended_user_id: number | null
          id: number
          licence_number: string | null
        }
        Insert: {
          extended_user_id?: number | null
          id?: number
          licence_number?: string | null
        }
        Update: {
          extended_user_id?: number | null
          id?: number
          licence_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pilots_extended_user_id_fkey"
            columns: ["extended_user_id"]
            referencedRelation: "extended_users"
            referencedColumns: ["id"]
          }
        ]
      }
      reservations: {
        Row: {
          created_at: string | null
          customer_id: number | null
          flight_id: number | null
          id: number
          is_paid: boolean | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: number | null
          flight_id?: number | null
          id?: number
          is_paid?: boolean | null
        }
        Update: {
          created_at?: string | null
          customer_id?: number | null
          flight_id?: number | null
          id?: number
          is_paid?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "reservations_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_flight_id_fkey"
            columns: ["flight_id"]
            referencedRelation: "flights"
            referencedColumns: ["id"]
          }
        ]
      }
      time_availability: {
        Row: {
          created_at: string | null
          extended_user_id: number | null
          id: number
          time: string | null
        }
        Insert: {
          created_at?: string | null
          extended_user_id?: number | null
          id?: number
          time?: string | null
        }
        Update: {
          created_at?: string | null
          extended_user_id?: number | null
          id?: number
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_availability_extended_user_id_fkey"
            columns: ["extended_user_id"]
            referencedRelation: "extended_users"
            referencedColumns: ["id"]
          }
        ]
      }
      voucher_status: {
        Row: {
          created_at: string | null
          id: number
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          status?: string | null
        }
        Relationships: []
      }
      vouchers: {
        Row: {
          created_at: string | null
          expiration_date: string | null
          flight_ticket_id: number | null
          id: number
          timestamp_of_payment: string | null
          voucher_number: string | null
          voucher_status_id: number | null
        }
        Insert: {
          created_at?: string | null
          expiration_date?: string | null
          flight_ticket_id?: number | null
          id?: number
          timestamp_of_payment?: string | null
          voucher_number?: string | null
          voucher_status_id?: number | null
        }
        Update: {
          created_at?: string | null
          expiration_date?: string | null
          flight_ticket_id?: number | null
          id?: number
          timestamp_of_payment?: string | null
          voucher_number?: string | null
          voucher_status_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vouchers_flight_ticket_id_fkey"
            columns: ["flight_ticket_id"]
            referencedRelation: "flight_tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vouchers_voucher_status_id_fkey"
            columns: ["voucher_status_id"]
            referencedRelation: "voucher_status"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
