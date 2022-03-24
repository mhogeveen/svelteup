<script lang="ts">
  import Spaces from '$lib/components/Spaces.svelte';
  import Space from '$lib/components/Space.svelte';
  import "../app.css";
</script>

<main class="h-screen w-full bg-slate-500 flex">
  <Spaces />

  <section class="grow flex flex-col">
    <nav class="h-10 w-full flex justify-center items-center bg-slate-400">Favorites</nav>
    <div class="flex grow">
      <Space />
      <div class="grow flex justify-center items-center">
        Main
      </div>
    </div>
  </section>
</main>