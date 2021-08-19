<script>
  import Icon from '@iconify/svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function next() {
    dispatch('next', { next: true })
  }
</script>

<div
  on:click={next}
  class="rounded-full cursor-pointer bg-white/8 h-13 text-white text-center transform transition right-5 bottom-5 shadow-2xl text-4xl w-13 fixed hover:(scale-115) active:scale-90"
>
  <Icon icon="ic:round-navigate-next" class="mt-1.5" />
</div>
