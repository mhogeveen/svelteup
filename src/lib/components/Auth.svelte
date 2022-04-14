<script lang="ts">
  import { supabase } from "$lib/supabase/client";
  import { userSession } from "$lib/stores";

  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google',
    })
  }
  
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    $userSession = null
  }
</script>

{#if $userSession}
  <button on:click={signOut}>Sign Out</button>
{:else}
  <button on:click={signIn}>Sign In</button>
{/if}