import { createClient } from '@supabase/supabase-js'
import { Database } from "~/types/supabase";

const supabaseClient = createClient<Database>(
    "https://ijxhpzkplnqptewrwwhv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqeGhwemtwbG5xcHRld3J3d2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyMTM1NDcsImV4cCI6MjAwMDc4OTU0N30.Pdcr-XKtFUF-aLvIKmwGczvYBEyD1wDDPC8VfkSBOz0"
)

export default supabaseClient
