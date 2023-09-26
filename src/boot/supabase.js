// XLpzq1kuTBc6CVab

// https://vsyazvpbfufpbxwgszsr.supabase.co

// api key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzeWF6dnBiZnVmcGJ4d2dzenNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NDg1MzUsImV4cCI6MjAxMTMyNDUzNX0.yD6wodRP1stuJasUQ5JRVGP6Y0Sb_SWrNSmV0HVnhlw

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vsyazvpbfufpbxwgszsr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzeWF6dnBiZnVmcGJ4d2dzenNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NDg1MzUsImV4cCI6MjAxMTMyNDUzNX0.yD6wodRP1stuJasUQ5JRVGP6Y0Sb_SWrNSmV0HVnhlw'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase', supabase);

export default function useSupabase() {
  return { supabase };
}
