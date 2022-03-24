<script lang="ts">
  let open: boolean = true;

  const toggleSpaceOpen = (e: MouseEvent | KeyboardEvent) => {
    console.log(e);
    if ('code' in e && e.code !== 'KeyQ') {
      return;
    }
    open = !open;
  }
</script>

<svelte:window on:keyup={toggleSpaceOpen}/>

<aside class="h-full w-80 bg-slate-300 justify-center items-center" class:flex={open} class:hidden={!open}>
  <button on:click={toggleSpaceOpen}>x</button>
  Folders & lists
</aside>