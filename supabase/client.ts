import { createClient } from '@supabase/supabase-js'
import { Database } from "~/types/supabase";

const supabase = createClient<Database>(
    "https://lvjmtlgufoomdqyaadwt.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2am10bGd1Zm9vbWRxeWFhZHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyODkxMDQsImV4cCI6MjAwMDg2NTEwNH0.BjZD-jV_cvDc7WeenC2IJAr1XMi6S2u41oyvSCm3VNI"
)

export default supabase
