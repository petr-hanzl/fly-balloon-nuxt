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
      }
      expenses: {
        Row: {
          additional_information: string | null
          created_at: string | null
          currency_type_id: number | null
          expense_type_id: number | null
          id: number
          price: string | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          expense_type_id?: number | null
          id?: number
          price?: string | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          currency_type_id?: number | null
          expense_type_id?: number | null
          id?: number
          price?: string | null
        }
      }
      extended_users: {
        Row: {
          created_at: string | null
          id: number
          is_active: boolean | null
          is_driver: boolean | null
          phone_number: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          is_driver?: boolean | null
          phone_number?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          is_driver?: boolean | null
          phone_number?: string | null
        }
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
      }
      pilots: {
        Row: {
          class: string | null
          created_at: string | null
          extended_user_id: number | null
          id: number
          licence_expiration: string | null
          licence_number: string | null
        }
        Insert: {
          class?: string | null
          created_at?: string | null
          extended_user_id?: number | null
          id?: number
          licence_expiration?: string | null
          licence_number?: string | null
        }
        Update: {
          class?: string | null
          created_at?: string | null
          extended_user_id?: number | null
          id?: number
          licence_expiration?: string | null
          licence_number?: string | null
        }
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
