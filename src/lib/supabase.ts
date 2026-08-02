import { createClient } from '@supabase/supabase-js'

// Public anon client. This site is a static export, so all Supabase access
// happens in the browser. RLS only allows anon to INSERT applications /
// documents and upload to the private "applications" storage bucket.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
)
