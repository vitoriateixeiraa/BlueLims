import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL || '',
  process.env.EXPO_PUBLIC_SUPABASE_KEY || ''
);
