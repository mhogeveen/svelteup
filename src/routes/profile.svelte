<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase/client';
  import { userSession } from '$lib/stores/userSession';

  let loading = true
  let first_name = null
  let last_name = null

  async function getProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`first_name, last_name`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) throw error

      if (data) {
        first_name = data.first_name
        last_name = data.last_name
      }
    } catch (error) {
      console.error(error)
    } finally {
      loading = false
    }
  }

  async function updateProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        last_name,
        first_name,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal',
      })

      if (error) throw error
    } catch (error) {
      console.error(error)
    } finally {
      loading = false
    }
  }

  onMount(() => {
    getProfile();
  })
</script>

{#if $userSession}
<form class="form-widget" on:submit|preventDefault={updateProfile}>
  <div>
    <label for="first_name">First name</label>
    <input
      class="border"
      id="first_name"
      type="text"
      bind:value={first_name}
    />
  </div>
  <div>
    <label for="last_name">Last name</label>
    <input
      class="border"
      id="last_name"
      type="last_name"
      bind:value={last_name}
    />
  </div>

  <div>
    <input type="submit" class="button block primary" value={loading ? 'Loading ...' : 'Update'} disabled={loading}/>
  </div>
</form>
{:else}
  <p>Please login to see your profile.</p>
{/if}