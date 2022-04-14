<script lang="ts">
  import Auth from '$lib/components/Auth.svelte';
  import { darkMode } from '$lib/stores';
</script>


<aside aria-label="Spaces sidebar" class="h-screen w-80 bg-white dark:bg-black flex flex-col p-2 border-r border-black dark:border-white">
  <h1 class="text-3xl font-black dark:text-white">SvelteUp</h1>
  <button on:click={darkMode.toggle} class="dark:text-white">Toggle darkmode</button>
</aside>