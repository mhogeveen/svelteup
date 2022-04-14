<script lang="ts">
  import Spaces from '$lib/components/Spaces.svelte';
  import Space from '$lib/components/Space.svelte';
  import { hotkey } from '$lib/hooks';
  import { favoritesActive } from '$lib/stores';
  import "../app.css";
</script>

<main class="h-screen w-full bg-slate-500 flex">
  <Spaces />

  <section class="grow flex flex-col">
    <nav use:hotkey={{meta: true, key: 'i', callback: favoritesActive.toggle}} class="h-10 w-full justify-center items-center bg-slate-400" class:flex={$favoritesActive} class:hidden={!$favoritesActive}>Favorites</nav>
    <div class="flex grow">
      <Space />
      <div class="grow flex justify-center items-center">
        Main
      </div>
    </div>
  </section>
</main>