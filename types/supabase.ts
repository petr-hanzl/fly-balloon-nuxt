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
          created_at: string | null
          creator_id: string | null
          header: string | null
          id: number
          text: string | null
        }
        Insert: {
          created_at?: string | null
          creator_id?: string | null
          header?: string | null
          id?: number
          text?: string | null
        }
        Update: {
          created_at?: string | null
          creator_id?: string | null
          header?: string | null
          id?: number
          text?: string | null
        }
      }
      balloons: {
        Row: {
          additional_information: string | null
          created_at: string | null
          id: number
          isActive: boolean | null
          maximum_capacity: number | null
          registration_number: string | null
        }
        Insert: {
          additional_information?: string | null
          created_at?: string | null
          id?: number
          isActive?: boolean | null
          maximum_capacity?: number | null
          registration_number?: string | null
        }
        Update: {
          additional_information?: string | null
          created_at?: string | null
          id?: number
          isActive?: boolean | null
          maximum_capacity?: number | null
          registration_number?: string | null
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
          created_at: string | null
          expense_type_id: number | null
          id: number
          price: string | null
        }
        Insert: {
          created_at?: string | null
          expense_type_id?: number | null
          id?: number
          price?: string | null
        }
        Update: {
          created_at?: string | null
          expense_type_id?: number | null
          id?: number
          price?: string | null
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
      flight_types: {
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
      flights: {
        Row: {
          additional_information: string | null
          balloon_id: number | null
          created_at: string | null
          creator_id: string | null
          flight_date: string | null
          flight_status_id: number | null
          flight_type_id: number | null
          id: number
          pilot_id: string | null
        }
        Insert: {
          additional_information?: string | null
          balloon_id?: number | null
          created_at?: string | null
          creator_id?: string | null
          flight_date?: string | null
          flight_status_id?: number | null
          flight_type_id?: number | null
          id?: number
          pilot_id?: string | null
        }
        Update: {
          additional_information?: string | null
          balloon_id?: number | null
          created_at?: string | null
          creator_id?: string | null
          flight_date?: string | null
          flight_status_id?: number | null
          flight_type_id?: number | null
          id?: number
          pilot_id?: string | null
        }
      }
      marketing_expenses: {
        Row: {
          created_at: string | null
          expense: number | null
          id: number
          marketing_type_id: number | null
        }
        Insert: {
          created_at?: string | null
          expense?: number | null
          id?: number
          marketing_type_id?: number | null
        }
        Update: {
          created_at?: string | null
          expense?: number | null
          id?: number
          marketing_type_id?: number | null
        }
      }
      marketing_revenues: {
        Row: {
          created_at: string | null
          id: number
          marketing_type_id: number | null
          revenue: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          marketing_type_id?: number | null
          revenue?: number | null
        }
        Update: {
          created_at?: string | null
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
          id: number
          isPaid: boolean | null
          price: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          isPaid?: boolean | null
          price?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          isPaid?: boolean | null
          price?: number | null
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
