<script lang="ts">
  import { supabase } from "$lib/supabase/client";

  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google',
    })
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }
</script>

<button on:click={signIn}>Sign In</button>
<button on:click={signOut}>Sign Out</button>