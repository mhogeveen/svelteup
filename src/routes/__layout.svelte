<script lang="ts">
  import Spaces from '$lib/components/Spaces.svelte';
  import Space from '$lib/components/Space.svelte';
  import { hotkey } from '$lib/hooks';
  import { favoritesActive, darkMode } from '$lib/stores';
  import "../app.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
</svelte:head>

<main class="h-screen w-full bg-slate-500 flex" class:dark={$darkMode}>
  <Spaces />

  <section class="grow flex flex-col">
    <nav use:hotkey={{meta: true, key: 'i', callback: favoritesActive.toggle}} class="h-10 w-full justify-center items-center bg-slate-400" class:flex={$favoritesActive} class:hidden={!$favoritesActive}>Favorites</nav>
    <div class="flex grow">
      <Space />
      <div class="grow flex justify-center items-center">
        <slot />
      </div>
    </div>
  </section>
</main>