import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase/client';
import type { Writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

const userSession: Writable<User> = writable(supabase.auth.user());

export default userSession;