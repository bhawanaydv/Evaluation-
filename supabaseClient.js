import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://metkjgdigzgqoftdjbue.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldGtqZ2RpZ3pncW9mdGRqYnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTc4MTQsImV4cCI6MjA2OTI5MzgxNH0.nbedJWjdIgLwQQ4zs3Bm1byVIG4Rmqm1Bqqe4l6f_mY'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
