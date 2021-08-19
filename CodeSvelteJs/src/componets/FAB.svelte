<script>
  import Icon from '@iconify/svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let before = false
  function next() {
    dispatch('next', { next: before })
  }
</script>

<div
  on:click={next}
  class="z-10 rounded-full cursor-pointer bg-white/8 h-13 text-white text-center transform transition right-5 bottom-5 shadow-2xl text-4xl w-13 fixed hover:(scale-115) active:scale-90 
  {before ? 'left-5' : 'right-5'}"
>
  {#if !before}
    <Icon icon="ic:round-navigate-next" class="mt-1.5" />
  {:else}
    <Icon icon="ic:round-navigate-before" class="mt-1.5" />
  {/if}
</div>
