<script lang="ts">
  import Fa from 'svelte-fa';
  import * as icons from '@fortawesome/pro-light-svg-icons';
  import { hotkey } from '$lib/hooks';
  import { spaceActive } from '$lib/stores';
  const { faChevronRight, faChevronLeft } = icons;
</script>

<aside class="h-full w-80 bg-white dark:bg-black dark:text-white justify-center items-center border-r border-black dark:border-white" class:flex={$spaceActive} class:hidden={!$spaceActive}>
  Folders & lists
</aside>
<button use:hotkey={{key: "o", meta: true}} on:click={spaceActive.toggle} class="relative h-5 w-5 top-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 -translate-x-3 -translate-y-1/2 rounded-full grid place-items-center text-xs">
  {#if $spaceActive}
    <Fa icon={faChevronLeft} />
  {:else}
    <Fa icon={faChevronRight} />
  {/if}
</button>