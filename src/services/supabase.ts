
import { createClient } from '@supabase/supabase-js';
import type { User } from '../types/User';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

const addUser = async (user: User) => {
    const { data, error } = await supabaseClient
    .from('User')
    .insert([
      user
    ]).select();

  if (error) {
    console.error('Error al insertar usuario:', error.message)
  } else {
    console.log('Usuario insertado:', data)
  }
}
export default addUser
        