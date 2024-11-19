
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ROLE_KEY,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
)



export default supabaseAdmin

